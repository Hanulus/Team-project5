/* ===== Global Styles ===== */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f0;
    color: #333;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Night Theme */
body.night-theme {
    background-color: #1a1a2e;
    color: #eee;
}

body.night-theme .main-header {
    background-color: #16213e;
}

body.night-theme .card,
body.night-theme .menu-item,
body.night-theme .accordion-item,
body.night-theme .popup-content {
    background-color: #0f3460 !important;
    color: #eee;
}

body.night-theme .button-style,
body.night-theme .submit-btn {
    background-color: #e94560;
}

body.night-theme .button-style:hover,
body.night-theme .submit-btn:hover {
    background-color: #c23b51;
}

h1, h2, h3 { margin: 0; }
img { max-width: 100%; height: auto; }
a { text-decoration: none; color: inherit; }

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* ===== Header + Navigation ===== */
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DEB887;
    padding: 15px 30px;
    border-bottom: 3px solid #8B4513;
    transition: background-color 0.3s ease;
}

.main-header .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #8B4513;
}

.navigation ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
    align-items: center;
}

.navigation a {
    font-weight: bold;
    color: #654321;
    transition: color 0.3s, transform 0.2s;
    padding: 5px 10px;
    border-radius: 5px;
}

.navigation a:hover {
    color: #8B4513;
    transform: translateY(-2px);
}

.navigation a:focus {
    outline: 2px solid #8B4513;
    outline-offset: 2px;
}

/* Subscribe Button */
.subscribe-button {
    background: #8B4513;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.subscribe-button:hover {
    background: #654321;
    transform: scale(1.05);
}

/* Theme Toggle Button */
#theme-toggle {
    background: #8B4513;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    margin-left: 10px;
}

#theme-toggle:hover {
    background: #654321;
}

/* ===== Banner ===== */
#top-banner {
    position: relative;
    text-align: center;
    margin-bottom: 40px;
}

.banner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(222,184,135,0.9);
    padding: 20px;
    border-radius: 10px;
    animation: fadeIn 1s ease;
}

.highlighted-text {
    background: #FFE4B5;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
}

/* ===== Time-based Greeting ===== */
#time-greeting {
    text-align: center;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.3s ease;
    animation: slideIn 0.5s ease;
}

/* ===== Rating System ===== */
.rating-container {
    text-align: center;
    padding: 30px;
    background: #fff;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.rating-stars {
    font-size: 2rem;
    margin: 20px 0;
}

.rating-star {
    cursor: pointer;
    transition: transform 0.2s, color 0.2s;
    display: inline-block;
    margin: 0 5px;
    color: #ccc;
}

.rating-star:hover {
    transform: scale(1.3);
}

#rating-display {
    font-size: 1.1rem;
    color: #8B4513;
    margin-top: 15px;
    font-weight: bold;
}

/* ===== User Name Input ===== */
.greeting-input-section {
    text-align: center;
    background: #fff;
    padding: 30px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.greeting-input-section input {
    padding: 10px;
    border: 2px solid #DEB887;
    border-radius: 5px;
    font-size: 1rem;
    margin-right: 10px;
    width: 250px;
}

.greeting-input-section button {
    padding: 10px 20px;
    background: #8B4513;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

.greeting-input-section button:hover {
    background: #654321;
}

/* ===== Card Row ===== */
.card-container {
    display: flex;
    gap: 20px;
    margin: 40px 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 280px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s;
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card h3 {
    margin-bottom: 10px;
    color: #8B4513;
}

.card p {
    flex: 1;
}

.card button {
    padding: 10px;
    border: none;
    background: #8B4513;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.card button:hover {
    background: #654321;
    transform: translateY(-2px);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

/* ===== Grid Layout ===== */
.layout {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    margin: 40px 20px;
    background: #fdfdfd;
    border: 2px solid #DEB887;
    border-radius: 8px;
    overflow: hidden;
}

.layout-header {
    grid-area: header;
    background: #DEB887;
    padding: 15px;
    text-align: center;
    font-weight: bold;
}

.sidebar {
    grid-area: sidebar;
    background: #FFF8DC;
    padding: 15px;
}

.main {
    grid-area: main;
    padding: 15px;
}

.footer {
    grid-area: footer;
    background: #DEB887;
    text-align: center;
    padding: 10px;
}

/* ===== Image Gallery ===== */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 40px 20px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s;
}

.gallery-item img {
    width: 100%;
    display: block;
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.02);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.caption {
    position: absolute;
    inset: auto 0 0 0;
    background: rgba(0,0,0,0.7);
    color: #fff;
    text-align: center;
    padding: 8px;
    opacity: 0;
    transition: opacity 0.3s;
}

.gallery-item:hover .caption {
    opacity: 1;
}

/* ===== Content Filter ===== */
.filter-section {
    text-align: center;
    margin: 40px 20px;
}

.filter-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.filter-btn {
    padding: 10px 20px;
    background: #fff;
    border: 2px solid #DEB887;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #654321;
    transition: all 0.3s;
}

.filter-btn:hover {
    background: #DEB887;
    transform: translateY(-2px);
}

.filter-btn.active {
    background: #8B4513;
    color: #fff;
    border-color: #8B4513;
}

.content-item {
    animation: fadeIn 0.5s ease;
}

/* ===== CTA Section ===== */
.cta-section {
    text-align: center;
    background: #F0E68C;
    padding: 40px;
    margin: 30px 0;
    border-radius: 10px;
}

.button-style {
    background: #8B4513;
    color: #fff;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s, transform 0.2s;
    display: inline-block;
    border: none;
    cursor: pointer;
}

.button-style:hover {
    background: #654321;
    transform: scale(1.05);
}

/* ===== Accordion ===== */
.accordion {
    max-width: 800px;
    margin: 20px auto;
}

.accordion-item {
    background: #fff;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s;
}

.accordion-item:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #DEB887;
    cursor: pointer;
    transition: background 0.3s;
}

.accordion-header:hover {
    background: #d4a574;
}

.accordion-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #654321;
}

.accordion-icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: #654321;
    transition: transform 0.3s;
}

.accordion-item.active .accordion-icon {
    transform: rotate(45deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #fff;
}

.accordion-content p {
    padding: 15px 20px;
    margin: 0;
    line-height: 1.6;
}

/* ===== Popup ===== */
.popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-content {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    animation: slideDown 0.3s ease;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #666;
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;
}

.close-btn:hover {
    color: #000;
    transform: rotate(90deg);
}

.popup-content h2 {
    color: #8B4513;
    margin-bottom: 10px;
}

.popup-content p {
    margin-bottom: 20px;
    color: #666;
}

#subscription-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#popup-email {
    padding: 12px;
    border: 2px solid #DEB887;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

#popup-email:focus {
    outline: none;
    border-color: #8B4513;
}

/* ===== Forms ===== */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #654321;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #DEB887;
    border-radius: 5px;
    font-size: 1rem;
    font-family: Arial, sans-serif;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #8B4513;
    box-shadow: 0 0 5px rgba(139, 69, 19, 0.3);
}

.submit-btn {
    background: #8B4513;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.submit-btn:hover {
    background: #654321;
    transform: translateY(-2px);
}

.error-message {
    color: #d32f2f;
    font-size: 0.875rem;
    margin-top: 5px;
    animation: slideIn 0.3s ease;
}

.success-message {
    background: #4CAF50;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    margin: 20px auto;
    max-width: 700px;
    text-align: center;
    animation: slideDown 0.3s ease;
}

/* ===== Menu Styles ===== */
.menu-section {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
}

.menu-section h2 {
    color: #8B4513;
    border-bottom: 2px solid #DEB887;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.menu-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.menu-item h3 {
    color: #654321;
    margin-bottom: 5px;
}

.menu-item p {
    color: #666;
    font-size: 0.95rem;
}

.price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #8B4513;
    white-space: nowrap;
    margin-left: 20px;
}

/* ===== Dynamic Menu ===== */
#dynamic-menu,
#special-offers,
#reviews-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.menu-category {
    margin-bottom: 30px;
}

.menu-category h3 {
    color: #8B4513;
    border-bottom: 2px solid #DEB887;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.menu-item-dynamic {
    padding: 10px;
    margin: 5px 0;
    background: #f9f9f9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    transition: background 0.3s;
}

.menu-item-dynamic:hover {
    background: #FFE4B5;
}

.review-item {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    animation: fadeIn 0.5s ease;
}

/* ===== Content Sections ===== */
.about-content {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
}

.about-content h2 {
    color: #8B4513;
    margin-bottom: 15px;
}

.about-content ul {
    list-style-position: inside;
    margin-left: 20px;
}

.about-content li {
    margin-bottom: 8px;
}

/* ===== Chef Section ===== */
.chef-info {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    margin-bottom: 40px;
}

.chef-info img {
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.chef-details {
    flex: 1;
}

/* ===== Footer ===== */
.site-footer,
footer {
    background: #654321;
    color: #fff;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

.site-footer p,
footer p {
    margin: 8px 0;
}

.datetime-display {
    font-size: 0.95rem;
    margin-top: 10px;
    color: #FFE4B5;
}

.team-members {
    font-size: 0.9rem;
    margin-top: 10px;
    font-style: italic;
}

/* ===== Page Headers ===== */
#menu-header,
#contact-header,
#booking-header,
#about-header,
#gallery-header {
    text-align: center;
    padding: 40px 20px;
    background: #FFF8DC;
    margin-bottom: 20px;
    border-radius: 10px;
}

#menu-header h1,
#contact-header h1,
#booking-header h1,
#about-header h1,
#gallery-header h1 {
    color: #8B4513;
    margin-bottom: 10px;
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
    .main-header {
        flex-direction: column;
        gap: 15px;
    }
    
    .navigation ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    
    .card-container {
        flex-direction: column;
    }
    
    .layout {
        grid-template-areas:
          "header"
          "main"
          "sidebar"
          "footer";
        grid-template-columns: 1fr;
    }
    
    .chef-info {
        flex-direction: column !important;
    }
    
    .chef-info img {
        max-width: 100%;
    }
    
    .popup-content {
        padding: 30px 20px;
    }
    
    .greeting-input-section input {
        width: 100%;
        margin-bottom: 10px;
    }
    
    .filter-buttons {
        flex-direction: column;
    }
    
    .filter-btn {
        width: 100%;
    }
}
