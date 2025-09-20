from flask import Flask, request, render_template_string
import threading, socket, math, time
from urllib.parse import urlparse

app = Flask(__name__)

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>จริง Web Scanner App</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; font-family: 'Roboto', sans-serif; background: linear-gradient(135deg, #74ABE2, #5563DE); }
    .container { max-width: 900px; margin: 40px auto; background: #fff; border-radius: 12px; padding: 30px; box-shadow: 0 12px 20px rgba(0,0,0,0.2); }
    h1 { text-align: center; font-size: 2.5em; margin-bottom: 10px; }
    p { text-align: center; font-size: 1.1em; }
    form { text-align: center; margin-top: 20px; }
    input[type="text"] { width: 70%; padding: 15px; font-size: 1.1em; border: 2px solid #ddd; border-radius: 8px; transition: border-color 0.3s ease; }
    input[type="text"]:focus { border-color: #5563DE; outline: none; }
    input[type="submit"] { padding: 15px 30px; font-size: 1.1em; border: none; border-radius: 8px; background: #5563DE; color: #fff; cursor: pointer; transition: background 0.3s ease; }
    input[type="submit"]:hover { background: #4453C0; }
    .result { margin-top: 30px; animation: fadeIn 1s ease-in-out; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; border-bottom: 1px solid #ddd; text-align: center; }
    th { background: #f5f5f5; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .icon-container { text-align: center; margin-bottom: 20px; }
    .icon-container img { width: 80px; height: 80px; animation: rotateIcon 5s linear infinite; }
    @keyframes rotateIcon { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    ul.gallery { list-style-type: none; padding: 0; display: flex; justify-content: center; flex-wrap: wrap; }
    ul.gallery li { margin: 10px; }
    ul.gallery li img { border-radius: 8px; width: 60px; height: 60px; transition: transform 0.3s ease; }
    ul.gallery li img:hover { transform: scale(1.2); }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon-container">
      <img src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt="App Icon">
    </div>
    <h1>จริง Web Scanner App</h1>
    <p>ป้อน IP หรือ URL เพื่อสแกนพอร์ตและคำนวณดัชนีความซับซ้อนแบบขั้นสูง</p>
    <form method="POST" action="/">
      <input type="text" name="target" placeholder="กรอก IP หรือ URL" required>
      <br>
      <input type="submit" value="เริ่มสแกน">
    </form>
    {% if results %}
    <div class="result">
      <h2>ผลสแกนของ {{ target }}</h2>
      <table>
        <tr>
          <th>พอร์ต</th>
          <th>สถานะ</th>
        </tr>
        {% for port, status in results %}
        <tr>
          <td>{{ port }}</td>
          <td>{{ status }}</td>
        </tr>
        {% endfor %}
      </table>
      <h3>ดัชนีความซับซ้อน : {{ complexity_index }}</h3>
      <p>(คำนวณจากสูตร: f = (1/(2π))*√(k/m) × ln(k+m+1))</p>
      <ul class="gallery">
        <li><img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"></li>
        <li><img src="https://cdn-icons-png.flaticon.com/512/1055/1055678.png"></li>
      </ul>
    </div>
    {% endif %}
  </div>
</body>
</html>
'''

def calculate_complexity_index(open_ports):
    if not open_ports:
        return 0.0
    k = sum(open_ports)
    m = len(open_ports) + 1
    f = 1 / (2 * math.pi) * math.sqrt(k / m)
    return round(f * math.log(k + m + 1), 4)

def scan_port(host, port, timeout=1.0):
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(timeout)
        result = s.connect_ex((host, port))
        s.close()
        return result == 0
    except:
        return False

def scan_target(target):
    parsed = urlparse(target)
    host = parsed.netloc if parsed.scheme and parsed.netloc else target
    host = host.split(':')[0]
    open_ports = []
    lock = threading.Lock()
    def scan_range(start, end):
        for port in range(start, end):
            if scan_port(host, port):
                with lock:
                    open_ports.append(port)
    threads = []
    for start in range(1, 1025, 100):
        end = min(start + 100, 1025)
        t = threading.Thread(target=scan_range, args=(start, end))
        threads.append(t)
        t.start()
    for t in threads:
        t.join()
    open_ports.sort()
    return open_ports

@app.route("/", methods=["GET", "POST"])
def index():
    results = None
    complexity_index = None
    target = ""
    if request.method == "POST":
        target = request.form.get("target", "").strip()
        if target:
            open_ports = scan_target(target)
            results = [(p, "Open") for p in open_ports]
            complexity_index = calculate_complexity_index(open_ports)
    return render_template_string(HTML_TEMPLATE, results=results, complexity_index=complexity_index, target=target)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080)
