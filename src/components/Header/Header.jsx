import "./Header.css";

const Header = () => {
  return (
    <section className="header-sec">
      <div>
        <ion-icon name="location-outline"></ion-icon>
        <span>London, UK</span>
      </div>
      <div>
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" placeholder="Search Here" />
      </div>
      <div>
        <ion-icon name="calendar-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
    </section>
  );
};

export default Header;
