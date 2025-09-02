function FindProxyForURL(url, host) {
  if (
    isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
    isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
    isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }

  if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
    return "DIRECT";
  }

  return "HTTPS 3ele0ss56t.proxy.cloudflare-gateway.com:443";
}

function แสดงหน้าต้อนรับ() {
  if (typeof document !== 'undefined') {
    const หน้าต้อนรับHTML = `
      <!DOCTYPE html>
      <html lang="th">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VPN Pro - ระบบกำหนดค่าพร็อกซี่อัตโนมัติ</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
        <style>
          :root {
            --primary: #4361ee;
            --primary-dark: #3a56d4;
            --secondary: #7209b7;
            --accent: #f72585;
            --bg-dark: #1a1a2e;
            --bg-light: #f8f9fa;
            --text-light: #ffffff;
            --text-dark: #16213e;
            --success: #06d6a0;
            --warning: #ffd166;
            --danger: #ef476f;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Prompt', sans-serif;
            background-color: var(--bg-light);
            color: var(--text-dark);
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background-image: url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
          }
          
          body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(26, 26, 46, 0.85);
            z-index: -1;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
          }
          
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .logo-container {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .logo {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: white;
            box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(67, 97, 238, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(67, 97, 238, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(67, 97, 238, 0);
            }
          }
          
          .logo-text {
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-light);
          }
          
          .nav-menu {
            display: flex;
            gap: 1.5rem;
          }
          
          .nav-link {
            color: var(--text-light);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            transition: color 0.3s ease;
            position: relative;
            padding: 0.5rem 0;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: width 0.3s ease;
          }
          
          .nav-link:hover {
            color: var(--accent);
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            margin-bottom: 4rem;
          }
          
          .hero-content {
            flex: 1;
          }
          
          .hero-title {
            font-size: 3rem;
            font-weight: 700;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            line-height: 1.2;
            animation: fadeInUp 1s both;
          }
          
          .hero-title span {
            color: var(--accent);
          }
          
          .hero-description {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            line-height: 1.6;
            animation: fadeInUp 1s 0.2s both;
          }
          
          .hero-image {
            flex: 1;
            max-width: 500px;
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          
          .hero-image img {
            width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
          }
          
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 25px rgba(67, 97, 238, 0.4);
          }
          
          .btn-primary:active {
            transform: translateY(1px);
          }
          
          .btn-secondary {
            background: transparent;
            color: var(--text-light);
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          
          .btn-secondary:hover {
            border-color: var(--accent);
            color: var(--accent);
          }
          
          .btn-group {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s 0.4s both;
          }
          
          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
          }
          
          .feature-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            animation: fadeIn 1s both;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.2);
          }
          
          .feature-icon {
            font-size: 2.5rem;
            color: var(--accent);
            margin-bottom: 1rem;
            display: inline-block;
          }
          
          .feature-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-light);
            margin-bottom: 1rem;
          }
          
          .feature-description {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
          }
          
          .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-bottom: 4rem;
            animation: fadeIn 1s 0.6s both;
          }
          
          .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }
          
          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-light);
            margin-bottom: 0.5rem;
          }
          
          .stat-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
          }
          
          .developer-info {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 4rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            animation: fadeIn 1s 0.8s both;
          }
          
          .developer-info h2 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
          
          .info-item {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .info-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
          }
          
          .info-content {
            flex: 1;
          }
          
          .info-label {
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 0.25rem;
            font-size: 0.9rem;
          }
          
          .info-value {
            color: var(--text-light);
            font-weight: 500;
          }
          
          .info-value a {
            color: var(--accent);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          
          .info-value a:hover {
            text-decoration: underline;
          }
          
          .status-container {
            margin-bottom: 4rem;
            animation: fadeIn 1s 1s both;
          }
          
          .status-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .status-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-light);
          }
          
          .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--success);
            box-shadow: 0 0 10px var(--success);
            animation: blink 2s infinite;
          }
          
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          .speed-test {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }
          
          .speed-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .speed-value {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-light);
            margin-bottom: 0.25rem;
          }
          
          .speed-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .footer {
            text-align: center;
            padding: 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.7);
          }
          
          .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-light);
            font-size: 1.2rem;
            transition: all 0.3s ease;
          }
          
          .social-link:hover {
            background: var(--primary);
            transform: translateY(-3px);
          }
          
          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Terminal-like UI */
          .terminal-container {
            background-color: var(--bg-dark);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 4rem;
            font-family: 'Courier New', monospace;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeIn 1s 1.2s both;
            position: relative;
            overflow: hidden;
          }
          
          .terminal-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .terminal-controls {
            display: flex;
            gap: 0.5rem;
          }
          
          .terminal-control {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          
          .terminal-control:nth-child(1) {
            background-color: var(--danger);
          }
          
          .terminal-control:nth-child(2) {
            background-color: var(--warning);
          }
          
          .terminal-control:nth-child(3) {
            background-color: var(--success);
          }
          
          .terminal-title {
            margin-left: auto;
            margin-right: auto;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
          }
          
          .terminal-content {
            color: var(--text-light);
            line-height: 1.6;
            max-height: 300px;
            overflow-y: auto;
            font-size: 0.9rem;
          }
          
          .terminal-prompt {
            color: var(--success);
            margin-right: 0.5rem;
          }
          
          .terminal-command {
            color: var(--text-light);
          }
          
          .terminal-output {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 1rem;
          }
          
          .terminal-ascii-art {
            font-family: 'Courier New', monospace;
            white-space: pre;
            color: var(--accent);
            margin-bottom: 1rem;
            line-height: 1.2;
            animation: terminalFadeIn 0.5s both;
          }
          
          @keyframes terminalFadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .terminal-matrix {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.1;
          }
          
          .terminal-content {
            position: relative;
            z-index: 1;
          }
          
          .terminal-line {
            margin-bottom: 0.5rem;
            animation: typewriter 0.5s steps(40, end);
          }
          
          @keyframes typewriter {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          
          .terminal-cursor {
            display: inline-block;
            width: 10px;
            height: 15px;
            background-color: var(--text-light);
            animation: blink 1s infinite;
            vertical-align: middle;
          }
          
          /* Responsive Styles */
          @media (max-width: 992px) {
            .hero {
              flex-direction: column;
              text-align: center;
            }
            
            .hero-image {
              order: -1;
            }
            
            .btn-group {
              justify-content: center;
            }
            
            .stats {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .hero-description {
              font-size: 1rem;
            }
            
            .navbar {
              flex-direction: column;
              gap: 1rem;
            }
            
            .logo-container {
              justify-content: center;
            }
            
            .nav-menu {
              flex-wrap: wrap;
              justify-content: center;
            }
          }
          
          @media (max-width: 576px) {
            .stats {
              grid-template-columns: 1fr;
            }
            
            .speed-test {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }
            
            .speed-item {
              flex-direction: row;
              gap: 0.5rem;
              align-items: center;
            }
            
            .speed-value {
              margin-bottom: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <nav class="navbar">
            <div class="logo-container">
              <div class="logo animate__animated animate__pulse animate__infinite">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="logo-text">VPN Pro</div>
            </div>
            <div class="nav-menu">
              <a href="#" class="nav-link"><i class="fas fa-home"></i> หน้าแรก</a>
              <a href="#" class="nav-link"><i class="fas fa-server"></i> เซิร์ฟเวอร์</a>
              <a href="#" class="nav-link"><i class="fas fa-cog"></i> ตั้งค่า</a>
              <a href="#" class="nav-link"><i class="fas fa-question-circle"></i> ช่วยเหลือ</a>
              <a href="#" class="nav-link"><i class="fas fa-user-circle"></i> บัญชี</a>
            </div>
          </nav>
          
          <section class="hero">
            <div class="hero-content">
              <h1 class="hero-title">ระบบกำหนดค่า<span>พร็อกซี่อัตโนมัติ</span> ที่ปลอดภัยและรวดเร็ว 🚀</h1>
              <p class="hero-description">เพิ่มความปลอดภัยในการท่องเว็บ ลดความล่าช้า และปกป้องความเป็นส่วนตัวของคุณด้วยระบบกำหนดค่าพร็อกซี่อัตโนมัติ VPN Pro</p>
              <div class="btn-group">
                <button class="btn btn-primary" onclick="ทดสอบความเร็วเครือข่าย()">
                  <i class="fas fa-tachometer-alt"></i> ทดสอบความเร็ว
                </button>
                <button class="btn btn-secondary" onclick="ค้นหาเส้นทางเร็วที่สุด()">
                  <i class="fas fa-route"></i> ค้นหาเส้นทางที่เร็วที่สุด
                </button>
              </div>
            </div>
            <div class="hero-image">
              <img src="https://images.unsplash.com/photo-1562813733-b31f0941fd52?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" alt="VPN Security">
            </div>
          </section>
          
          <section class="status-container">
            <div class="status-card">
              <div class="status-text">
                <div class="status-indicator"></div>
                <span>สถานะระบบ: กำลังทำงาน</span>
              </div>
              <div class="speed-test">
                <div class="speed-item">
                  <div class="speed-value">45 ms</div>
                  <div class="speed-label">ค่าความหน่วง</div>
                </div>
                <div class="speed-item">
                  <div class="speed-value">95.2 Mbps</div>
                  <div class="speed-label">ความเร็วดาวน์โหลด</div>
                </div>
                <div class="speed-item">
                  <div class="speed-value">24.8 Mbps</div>
                  <div class="speed-label">ความเร็วอัพโหลด</div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="features">
            <div class="feature-card">
              <i class="feature-icon fas fa-bolt"></i>
              <h3 class="feature-title">ความเร็วสูงสุด ⚡</h3>
              <p class="feature-description">เพิ่มความเร็วในการรับส่งข้อมูลด้วยระบบค้นหาเส้นทางอัตโนมัติที่เร็วที่สุด ทำให้การท่องเว็บ สตรีมมิ่ง และดาวน์โหลดเร็วกว่าที่เคย</p>
            </div>
            <div class="feature-card">
              <i class="feature-icon fas fa-lock"></i>
              <h3 class="feature-title">ความปลอดภัยสูงสุด 🔒</h3>
              <p class="feature-description">ปกป้องข้อมูลส่วนตัวของคุณด้วยการเข้ารหัสระดับสูง ป้องกันการดักจับข้อมูลและการโจมตีจากภายนอก</p>
            </div>
            <div class="feature-card">
              <i class="feature-icon fas fa-globe"></i>
              <h3 class="feature-title">เข้าถึงได้ทุกที่ 🌎</h3>
              <p class="feature-description">เข้าถึงเว็บไซต์และบริการทั่วโลกโดยไม่มีข้อจำกัดทางภูมิศาสตร์ ท่องเว็บได้อย่างอิสระ</p>
            </div>
          </section>
          
          <section class="stats">
            <div class="stat-card">
              <div class="stat-number">1000+</div>
              <div class="stat-label">เซิร์ฟเวอร์ทั่วโลก</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">ความเสถียร</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">AES-256</div>
              <div class="stat-label">การเข้ารหัส</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">การสนับสนุน</div>
            </div>
          </section>
          
          <section class="terminal-container">
            <div class="terminal-header">
              <div class="terminal-controls">
                <div class="terminal-control"></div>
                <div class="terminal-control"></div>
                <div class="terminal-control"></div>
              </div>
              <div class="terminal-title">Terminal - VPN Pro Console</div>
            </div>
            <canvas class="terminal-matrix" id="matrixCanvas"></canvas>
            <div class="terminal-content">
              <div class="terminal-ascii-art">
 ██▒   █▓ ██▓███   ███▄    █     ██▓███   ██▀███   ▒█████  
▓██░   █▒▓██░  ██▒ ██ ▀█   █    ▓██░  ██▒▓██ ▒ ██▒▒██▒  ██▒
 ▓██  █▒░▓██░ ██▓▒▓██  ▀█ ██▒   ▓██░ ██▓▒▓██ ░▄█ ▒▒██░  ██▒
  ▒██ █░░▒██▄█▓▒ ▒▓██▒  ▐▌██▒   ▒██▄█▓▒ ▒▒██▀▀█▄  ▒██   ██░
   ▒▀█░  ▒██▒ ░  ░▒██░   ▓██░   ▒██▒ ░  ░░██▓ ▒██▒░ ████▓▒░
   ░ ▐░  ▒▓▒░ ░  ░░ ▒░   ▒ ▒    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░ 
   ░ ░░  ░▒ ░     ░ ░░   ░ ▒░   ░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░ 
     ░░  ░░          ░   ░ ░    ░░         ░░   ░ ░ ░ ░ ▒  
      ░                    ░                ░         ░ ░  
     ░                                                    
              </div>
              <div class="terminal-line">
                <span class="terminal-prompt">root@vpn-pro:~$</span>
                <span class="terminal-command">systemctl status vpn-service</span>
              </div>
              <div class="terminal-output">
                ● vpn-service.service - VPN Pro Service
                     Loaded: loaded (/etc/systemd/system/vpn-service.service; enabled; vendor preset: enabled)
                     Active: active (running) since Wed 2023-10-25 08:14:32 UTC; 2h 35min ago
                   Main PID: 1234 (vpn-daemon)
                      Tasks: 18 (limit: 4915)
                     Memory: 42.5M
                     CGroup: /system.slice/vpn-service.service
                             └─1234 /usr/bin/vpn-daemon --config /etc/vpn-pro/config.json
              </div>
              <div class="terminal-line">
                <span class="terminal-prompt">root@vpn-pro:~$</span>
                <span class="terminal-command">check-proxy-routes</span>
              </div>
              <div class="terminal-output">
                ✓ Primary route: HTTPS 3ele0ss56t.proxy.cloudflare-gateway.com:443 (ACTIVE)
                ✓ Backup route: HTTPS backup.proxy.example.com:443 (STANDBY)
                ✓ Fallback route: HTTP fallback.proxy.example.com:80 (STANDBY)
                
                All routes verified and ready. Latency optimization enabled.
              </div>
              <div class="terminal-line">
                <span class="terminal-prompt">root@vpn-pro:~$</span>
                <span class="terminal-command">vpn-speed-test</span>
              </div>
              <div class="terminal-output">
                Running speed test...
                Download: 95.2 Mbps
                Upload: 24.8 Mbps
                Latency: 45 ms
                Jitter: 3.2 ms
                
                Performance rating: EXCELLENT
                Connection security: STRONG (AES-256 encryption)
              </div>
              <div class="terminal-line">
                <span class="terminal-prompt">root@vpn-pro:~$</span>
                <span class="terminal-command">_</span>
                <span class="terminal-cursor"></span>
              </div>
            </div>
          </section>
          
          <section class="developer-info">
            <h2><i class="fas fa-code"></i> ข้อมูลนักพัฒนา</h2>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-user"></i>
                </div>
                <div class="info-content">
                  <div class="info-label">ชื่อ</div>
                  <div class="info-value">ภูสิทธิ์</div>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="info-content">
                  <div class="info-label">โทรศัพท์</div>
                  <div class="info-value">088-952-3469</div>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fab fa-telegram-plane"></i>
                </div>
                <div class="info-content">
                  <div class="info-label">Telegram</div>
                  <div class="info-value"><a href="https://t.me/VPN1eer" target="_blank">https://t.me/VPN1eer</a></div>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fab fa-telegram"></i>
                </div>
                <div class="info-content">
                  <div class="info-label">Telegram Bot</div>
                  <div class="info-value"><a href="https://t.me/RTXX1_bot" target="_blank">@RTXX1_bot</a></div>
                </div>
              </div>
            </div>
          </section>
          
          <footer class="footer">
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
            </div>
            <p>&copy; 2023-2025 VPN Pro โดย ภูสิทธิ์. สงวนลิขสิทธิ์.</p>
          </footer>
        </div>
        
        <script>
          // Matrix animation
          const canvas = document.getElementById('matrixCanvas');
          const ctx = canvas.getContext('2d');
          
          canvas.width = canvas.parentElement.offsetWidth;
          canvas.height = canvas.parentElement.offsetHeight;
          
          const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
          const fontSize = 14;
          const columns = canvas.width / fontSize;
          
          const drops = [];
          for (let i = 0; i < columns; i++) {
            drops[i] = 1;
          }
          
          function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#4361ee';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
              const text = chars.charAt(Math.floor(Math.random() * chars.length));
              ctx.fillText(text, i * fontSize, drops[i] * fontSize);
              
              if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
              }
              
              drops[i]++;
            }
          }
          
          setInterval(drawMatrix, 120);
          
          // Terminal cursor animation
          const cursor = document.querySelector('.terminal-cursor');
          setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
          }, 500);
          
          // Initialize app when window loads
          window.onload = function() {
            // Add typewriter effect to terminal lines
            const terminalLines = document.querySelectorAll('.terminal-line');
            terminalLines.forEach((line, index) => {
              line.style.animationDelay = (index * 0.5) + 's';
            });
            
            // Call original initialization function if it exists
            if (typeof เริ่มต้นแอปพลิเคชัน === 'function') {
              เริ่มต้นแอปพลิเคชัน();
            }
          };
          
          // Link original functions with new UI
          function updateSpeedDisplay(results) {
            if (results && results.ความเร็วเฉลี่ย) {
              document.querySelector('.speed-test .speed-item:nth-child(2) .speed-value').textContent = results.ความเร็วเฉลี่ย + ' ' + results.หน่วย;
            }
          }
        </script>
      </body>
      </html>
    `;
    
    document.open();
    document.write(หน้าต้อนรับHTML);
    document.close();
    
    return true;
  }
  
  return false;
}

function ตรวจสอบสถานะPAC() {
  return {
    สถานะ: "ทำงาน",
    เวอร์ชัน: "1.1.0",
    อัปเดตล่าสุด: new Date().toISOString(),
    ข้อมูลนักพัฒนา: {
      ชื่อ: "ภูสิทธิ์",
      โทรศัพท์: "0889523469",
      ทีเลแกรม: "https://t.me/VPN1eer",
      บอททีเลแกรม: "@RTXX1_bot"
    },
    เซิร์ฟเวอร์พร็อกซี่: "3ele0ss56t.proxy.cloudflare-gateway.com:443",
    โปรโตคอล: "HTTPS"
  };
}

function ข้อมูลนักพัฒนา() {
  return JSON.stringify({
    นักพัฒนา: {
      ชื่อ: "ภูสิทธิ์",
      ช่องทางติดต่อ: {
        โทรศัพท์: "0889523469",
        ทีเลแกรม: "https://t.me/VPN1eer",
        บอททีเลแกรม: "@RTXX1_bot"
      }
    },
    แอปพลิเคชัน: {
      ชื่อ: "ระบบกำหนดค่าพร็อกซี่อัตโนมัติสำหรับ VPN",
      เวอร์ชัน: "1.1.0",
      คำอธิบาย: "ระบบกำหนดค่าพร็อกซี่อัตโนมัติสำหรับการเชื่อมต่อ VPN ที่ปลอดภัย"
    }
  }, null, 2);
}

function คำแนะนำการใช้งานพร็อกซี่() {
  return `
คำแนะนำการใช้งานพร็อกซี่:

1. การตั้งค่าในเว็บเบราวเซอร์:
   - Chrome: ไปที่ การตั้งค่า > ขั้นสูง > ระบบ > เปิดการตั้งค่าพร็อกซี่ของคอมพิวเตอร์ของคุณ
   - Firefox: ไปที่ ตัวเลือก > เครือข่าย > การตั้งค่าการเชื่อมต่อ > เลือก "กำหนดค่าอัตโนมัติ URL พร็อกซี่"

2. ใส่ URL ของไฟล์ PAC: http://yourserver.com/proxy.pac

3. ติดต่อนักพัฒนา:
   - ชื่อ: ภูสิทธิ์
   - โทรศัพท์: 088-952-3469
   - Telegram: https://t.me/VPN1eer
   - Bot: @RTXX1_bot

หากพบปัญหาการใช้งาน กรุณาติดต่อนักพัฒนาโดยตรง
`;
}

function ลิงก์ติดต่อ() {
  return {
    ลิงก์โทรศัพท์: "tel:+66889523469",
    ลิงก์ทีเลแกรม: "https://t.me/VPN1eer",
    ลิงก์บอททีเลแกรม: "https://t.me/RTXX1_bot"
  };
}

function เริ่มใช้งานครั้งแรก() {
  try {
    if (typeof localStorage !== 'undefined') {
      const เคยใช้งานแล้ว = localStorage.getItem('pacHasRunBefore');
      if (!เคยใช้งานแล้ว) {
        localStorage.setItem('pacHasRunBefore', 'true');
        return true;
      }
    }
  } catch (e) {
    console.error('ไม่สามารถเข้าถึง localStorage ได้:', e);
  }
  
  return false;
}

function เริ่มต้นแอปพลิเคชัน() {
  if (เริ่มใช้งานครั้งแรก()) {
    แสดงหน้าต้อนรับ();
  }
  
  return "เริ่มต้นแอปพลิเคชันสำเร็จ";
}

if (typeof window !== 'undefined') {
  window.onload = function() {
    เริ่มต้นแอปพลิเคชัน();
  };
}

if (!Math.log2) {
  Math.log2 = function(x) {
    return Math.log(x) / Math.LN2;
  };
}

function วัดความเร็วเครือข่าย() {
  const เริ่มเวลา = new Date().getTime();
  const ขนาดทดสอบ = 1024 * 500;
  const ข้อมูลทดสอบ = new Array(ขนาดทดสอบ).fill('A').join('');
  
  return new Promise(function(resolve, reject) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://www.cloudflare.com/cdn-cgi/trace', true);
      xhr.onload = function() {
        const สิ้นสุดเวลา = new Date().getTime();
        const เวลาที่ใช้ = (สิ้นสุดเวลา - เริ่มเวลา) / 1000;
        const ความเร็ว = ขนาดทดสอบ / เวลาที่ใช้ / 1024;
        
        resolve({
          ความเร็ว: ความเร็ว.toFixed(2),
          หน่วย: 'KB/s',
          เวลาที่ใช้: เวลาที่ใช้.toFixed(3),
          หน่วยเวลา: 'วินาที'
        });
      };
      xhr.onerror = function(e) {
        reject({
          ข้อผิดพลาด: 'ไม่สามารถทดสอบความเร็วได้',
          รายละเอียด: e
        });
      };
      xhr.send(ข้อมูลทดสอบ);
    } catch (e) {
      reject({
        ข้อผิดพลาด: 'เกิดข้อผิดพลาดขณะทดสอบความเร็ว',
        รายละเอียด: e
      });
    }
  });
}

function วัดค่าความหน่วง(โฮสต์ = 'www.google.com') {
  const จำนวนทดสอบ = 5;
  const ผลลัพธ์ = [];
  
  return new Promise(function(resolve, reject) {
    function ทดสอบรอบ(รอบ) {
      if (รอบ >= จำนวนทดสอบ) {
        const ค่าเฉลี่ย = ผลลัพธ์.reduce((a, b) => a + b, 0) / ผลลัพธ์.length;
        resolve({
          ค่าเฉลี่ย: ค่าเฉลี่ย.toFixed(2),
          หน่วย: 'ms',
          ค่าต่ำสุด: Math.min(...ผลลัพธ์).toFixed(2),
          ค่าสูงสุด: Math.max(...ผลลัพธ์).toFixed(2),
          จำนวนทดสอบ: จำนวนทดสอบ
        });
        return;
      }
      
      const เริ่มเวลา = new Date().getTime();
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://${โฮสต์}/favicon.ico?t=${เริ่มเวลา}`, true);
      xhr.onload = function() {
        const สิ้นสุดเวลา = new Date().getTime();
        const ค่าความหน่วง = สิ้นสุดเวลา - เริ่มเวลา;
        ผลลัพธ์.push(ค่าความหน่วง);
        
        setTimeout(function() {
          ทดสอบรอบ(รอบ + 1);
        }, 500);
      };
      xhr.onerror = function() {
        ผลลัพธ์.push(999);
        setTimeout(function() {
          ทดสอบรอบ(รอบ + 1);
        }, 500);
      };
      xhr.timeout = 5000;
      xhr.ontimeout = function() {
        ผลลัพธ์.push(5000);
        setTimeout(function() {
          ทดสอบรอบ(รอบ + 1);
        }, 500);
      };
      xhr.send();
    }
    
    ทดสอบรอบ(0);
  });
}

function ทดสอบความเร็วดาวน์โหลด() {
  const ขนาดไฟล์ = [1, 2, 5, 10]; 
  const หน่วย = 'MB';
  const ผลลัพธ์ = [];
  
  return new Promise(function(resolve, reject) {
    function ทดสอบไฟล์(ดัชนี) {
      if (ดัชนี >= ขนาดไฟล์.length) {
        const ค่าเฉลี่ย = ผลลัพธ์.reduce((a, b) => a + b, 0) / ผลลัพธ์.length;
        resolve({
          ความเร็วเฉลี่ย: ค่าเฉลี่ย.toFixed(2),
          หน่วย: 'Mbps',
          ผลทดสอบแต่ละไฟล์: ผลลัพธ์,
          จำนวนไฟล์ทดสอบ: ขนาดไฟล์.length
        });
        return;
      }
      
      const ขนาดปัจจุบัน = ขนาดไฟล์[ดัชนี];
      const url = `https://speed.cloudflare.com/__down?bytes=${ขนาดปัจจุบัน * 1024 * 1024}`;
      const เริ่มเวลา = new Date().getTime();
      
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        const สิ้นสุดเวลา = new Date().getTime();
        const เวลาที่ใช้ = (สิ้นสุดเวลา - เริ่มเวลา) / 1000; 
        const บิตที่ได้รับ = xhr.response.byteLength * 8;
        const ความเร็ว = บิตที่ได้รับ / เวลาที่ใช้ / 1024 / 1024;
        
        ผลลัพธ์.push(ความเร็ว);
        setTimeout(function() {
          ทดสอบไฟล์(ดัชนี + 1);
        }, 1000);
      };
      xhr.onerror = function() {
        ผลลัพธ์.push(0);
        setTimeout(function() {
          ทดสอบไฟล์(ดัชนี + 1);
        }, 1000);
      };
      xhr.send();
    }
    
    ทดสอบไฟล์(0);
  });
}

function ทดสอบความเร็วอัพโหลด() {
  const ขนาดไฟล์ = [1, 2, 5]; 
  const หน่วย = 'MB';
  const ผลลัพธ์ = [];
  
  return new Promise(function(resolve, reject) {
    function ทดสอบไฟล์(ดัชนี) {
      if (ดัชนี >= ขนาดไฟล์.length) {
        const ค่าเฉลี่ย = ผลลัพธ์.reduce((a, b) => a + b, 0) / ผลลัพธ์.length;
        resolve({
          ความเร็วเฉลี่ย: ค่าเฉลี่ย.toFixed(2),
          หน่วย: 'Mbps',
          ผลทดสอบแต่ละไฟล์: ผลลัพธ์,
          จำนวนไฟล์ทดสอบ: ขนาดไฟล์.length
        });
        return;
      }
      
      const ขนาดปัจจุบัน = ขนาดไฟล์[ดัชนี];
      const ข้อมูลอัพโหลด = new ArrayBuffer(ขนาดปัจจุบัน * 1024 * 1024);
      const เริ่มเวลา = new Date().getTime();
      
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://speed.cloudflare.com/__up', true);
      xhr.onload = function() {
        const สิ้นสุดเวลา = new Date().getTime();
        const เวลาที่ใช้ = (สิ้นสุดเวลา - เริ่มเวลา) / 1000;
        const บิตที่ส่ง = ขนาดปัจจุบัน * 1024 * 1024 * 8;
        const ความเร็ว = บิตที่ส่ง / เวลาที่ใช้ / 1024 / 1024;
        
        ผลลัพธ์.push(ความเร็ว);
        setTimeout(function() {
          ทดสอบไฟล์(ดัชนี + 1);
        }, 1000);
      };
      xhr.onerror = function() {
        ผลลัพธ์.push(0);
        setTimeout(function() {
          ทดสอบไฟล์(ดัชนี + 1);
        }, 1000);
      };
      xhr.send(ข้อมูลอัพโหลด);
    }
    
    ทดสอบไฟล์(0);
  });
}

function ค้นหาเส้นทางเร็วที่สุด(พร็อกซี่จุดหมาย = [], โฮสต์ = 'www.google.com') {
  const รายการพร็อกซี่ = พร็อกซี่จุดหมาย.length > 0 ? พร็อกซี่จุดหมาย : [
    { เซิร์ฟเวอร์: "3ele0ss56t.proxy.cloudflare-gateway.com", พอร์ต: 443, โปรโตคอล: "HTTPS" },
    { เซิร์ฟเวอร์: "backup.proxy.example.com", พอร์ต: 443, โปรโตคอล: "HTTPS" },
    { เซิร์ฟเวอร์: "fallback.proxy.example.com", พอร์ต: 443, โปรโตคอล: "HTTPS" }
  ];
  
  return new Promise(function(resolve, reject) {
    const ผลลัพธ์ = [];
    let พร็อกซี่ที่ทดสอบแล้ว = 0;
    
    for (let i = 0; i < รายการพร็อกซี่.length; i++) {
      const พร็อกซี่ = รายการพร็อกซี่[i];
      const เริ่มเวลา = new Date().getTime();
      
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://${โฮสต์}/favicon.ico?t=${เริ่มเวลา}`, true);
      xhr.timeout = 10000;
      
      xhr.onload = function() {
        const สิ้นสุดเวลา = new Date().getTime();
        const ค่าความหน่วง = สิ้นสุดเวลา - เริ่มเวลา;
        
        ผลลัพธ์.push({
          พร็อกซี่: พร็อกซี่,
          ค่าความหน่วง: ค่าความหน่วง,
          สถานะ: 'สำเร็จ'
        });
        
        พร็อกซี่ที่ทดสอบแล้ว++;
        ตรวจสอบเสร็จสิ้น();
      };
      
      xhr.onerror = function() {
        ผลลัพธ์.push({
          พร็อกซี่: พร็อกซี่,
          ค่าความหน่วง: 99999,
          สถานะ: 'ล้มเหลว'
        });
        
        พร็อกซี่ที่ทดสอบแล้ว++;
        ตรวจสอบเสร็จสิ้น();
      };
      
      xhr.ontimeout = function() {
        ผลลัพธ์.push({
          พร็อกซี่: พร็อกซี่,
          ค่าความหน่วง: 10000,
          สถานะ: 'หมดเวลา'
        });
        
        พร็อกซี่ที่ทดสอบแล้ว++;
        ตรวจสอบเสร็จสิ้น();
      };
      
      xhr.send();
    }
    
    function ตรวจสอบเสร็จสิ้น() {
      if (พร็อกซี่ที่ทดสอบแล้ว === รายการพร็อกซี่.length) {
        ผลลัพธ์.sort((a, b) => a.ค่าความหน่วง - b.ค่าความหน่วง);
        
        const พร็อกซี่ที่เร็วที่สุด = ผลลัพธ์[0];
        const คำสั่งพร็อกซี่ = `${พร็อกซี่ที่เร็วที่สุด.พร็อกซี่.โปรโตคอล} ${พร็อกซี่ที่เร็วที่สุด.พร็อกซี่.เซิร์ฟเวอร์}:${พร็อกซี่ที่เร็วที่สุด.พร็อกซี่.พอร์ต}`;
        
        resolve({
          พร็อกซี่ที่เร็วที่สุด: พร็อกซี่ที่เร็วที่สุด.พร็อกซี่,
          ค่าความหน่วง: พร็อกซี่ที่เร็วที่สุด.ค่าความหน่วง,
          คำสั่งพร็อกซี่: คำสั่งพร็อกซี่,
          ผลลัพธ์ทั้งหมด: ผลลัพธ์
        });
      }
    }
  });
}

function ปรับแต่งการตั้งค่าเพื่อเพิ่มความเร็ว() {
  const การตั้งค่าที่แนะนำ = {
    เปิดใช้งาน_HTTP2: true,
    เปิดใช้งาน_QUIC: true,
    ใช้_DNS_over_HTTPS: true,
    เซิร์ฟเวอร์_DNS: [
      "1.1.1.1",
      "8.8.8.8",
      "9.9.9.9"
    ],
    ขนาดแคช_DNS: 1000,
    เวลาแคช_DNS: 300,
    เวลาหมดอายุการเชื่อมต่อ: 60,
    จำนวนการเชื่อมต่อสูงสุดต่อโฮสต์: 10,
    ปิดการใช้งาน_WebRTC: true,
    เปิดใช้งานการบีบอัดข้อมูล: true
  };
  
  if (typeof navigator !== 'undefined') {
    const ค่าปัจจุบัน = {
      เว็บเบราวเซอร์: navigator.userAgent,
      ภาษา: navigator.language,
      แพลตฟอร์ม: navigator.platform,
      cookies_เปิดใช้งาน: navigator.cookieEnabled
    };
    
    return {
      การตั้งค่าที่แนะนำ: การตั้งค่าที่แนะนำ,
      ค่าปัจจุบัน: ค่าปัจจุบัน,
      คำแนะนำเพิ่มเติม: [
        "ใช้เครือข่าย Wi-Fi 5GHz แทน 2.4GHz เพื่อความเร็วที่สูงขึ้น",
        "ปิดโปรแกรมที่ไม่จำเป็นที่ใช้อินเทอร์เน็ตในขณะใช้งาน VPN",
        "เลือกเซิร์ฟเวอร์ VPN ที่ใกล้กับตำแหน่งของคุณเพื่อลดความหน่วง"
      ]
    };
  }
  
  return การตั้งค่าที่แนะนำ;
}

function ตรวจสอบเครือข่ายโดยละเอียด() {
  if (typeof navigator === 'undefined') {
    return {
      ข้อผิดพลาด: "ไม่สามารถตรวจสอบได้จากสภาพแวดล้อมปัจจุบัน"
    };
  }
  
  const รายงาน = {
    เวลาตรวจสอบ: new Date().toISOString(),
    รายละเอียดเบราวเซอร์: {
      userAgent: navigator.userAgent,
      แพลตฟอร์ม: navigator.platform,
      ภาษา: navigator.language,
      cookieEnabled: navigator.cookieEnabled
    }
  };
  
  if (typeof navigator.connection !== 'undefined') {
    รายงาน.การเชื่อมต่อเครือข่าย = {
      ประเภทการเชื่อมต่อ: navigator.connection.effectiveType,
      ความเร็วดาวน์โหลด: navigator.connection.downlink + " Mbps",
      ความเร็วอัพโหลดโดยประมาณ: navigator.connection.downlink * 0.2 + " Mbps",
      rtt: navigator.connection.rtt + " ms",
      saveData: navigator.connection.saveData
    };
  }
  
  if (typeof window !== 'undefined') {
    รายงาน.ขนาดหน้าจอ = {
      ความกว้าง: window.innerWidth,
      ความสูง: window.innerHeight,
      pixelRatio: window.devicePixelRatio
    };
  }
  
  return รายงาน;
}

function FindOptimizedProxyForURL(url, host) {
  const พร็อกซี่ที่ใช้ได้ = [
    { เซิร์ฟเวอร์: "3ele0ss56t.proxy.cloudflare-gateway.com", พอร์ต: 443, โปรโตคอล: "HTTPS", น้ำหนัก: 10 },
    { เซิร์ฟเวอร์: "backup.proxy.example.com", พอร์ต: 443, โปรโตคอล: "HTTPS", น้ำหนัก: 5 },
    { เซิร์ฟเวอร์: "fallback.proxy.example.com", พอร์ต: 443, โปรโตคอล: "HTTPS", น้ำหนัก: 2 }
  ];
  
  if (
    isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
    isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
    isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
    isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")
  ) {
    return "DIRECT";
  }
  
  const ชื่อโดเมน = host.toLowerCase();
  
  const โดเมนความเร็วสูง = [
    "youtube.com", "netflix.com", "facebook.com", "line.me"
  ];
  
  for (let i = 0; i < โดเมนความเร็วสูง.length; i++) {
    if (ชื่อโดเมน.indexOf(โดเมนความเร็วสูง[i]) !== -1) {
      return `${พร็อกซี่ที่ใช้ได้[0].โปรโตคอล} ${พร็อกซี่ที่ใช้ได้[0].เซิร์ฟเวอร์}:${พร็อกซี่ที่ใช้ได้[0].พอร์ต}`;
    }
  }
  
  let รวมคะแนน = 0;
  for (let i = 0; i < พร็อกซี่ที่ใช้ได้.length; i++) {
    รวมคะแนน += พร็อกซี่ที่ใช้ได้[i].น้ำหนัก;
  }
  
  const สุ่มคะแนน = Math.random() * รวมคะแนน;
  let คะแนนสะสม = 0;
  
  for (let i = 0; i < พร็อกซี่ที่ใช้ได้.length; i++) {
    คะแนนสะสม += พร็อกซี่ที่ใช้ได้[i].น้ำหนัก;
    if (สุ่มคะแนน <= คะแนนสะสม) {
      return `${พร็อกซี่ที่ใช้ได้[i].โปรโตคอล} ${พร็อกซี่ที่ใช้ได้[i].เซิร์ฟเวอร์}:${พร็อกซี่ที่ใช้ได้[i].พอร์ต}`;
    }
  }
  
  return "HTTPS 3ele0ss56t.proxy.cloudflare-gateway.com:443";
}
