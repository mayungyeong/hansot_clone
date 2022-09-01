
function Header() {
    return (<div>
        {/* 상단바 */}
        <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="#">
                <img src={require('./img/logo.png')} alt="" />
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">

                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            BRAND
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">브랜드 스토리</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            ESG
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">ESG 경영이란?</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            MENU
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">전체메뉴</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            STORE
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">주변점포찾기</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            EVENT
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">이 달의 이벤트</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            FRANCHISE
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Why 한솥 가맹점</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            HANSOT
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">한솥의 약속</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>

        {/* 상단 광고 이미지 */}
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
                <li data-target="#demo" data-slide-to="6"></li>
            </ul>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('./img/top_1.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_2.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_3.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_4.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_5.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_6.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('./img/top_7.jpg')} alt="" />
                </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
    </div>
    )
}

export default Header;