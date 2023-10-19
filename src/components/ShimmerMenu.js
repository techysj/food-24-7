const ShimmerMenu = () => {
  return (
    <ul className="o-vertical-spacing o-vertical-spacing--l">
      <li className="blog-post o-media">
        <div className="o-media__body">
          <div className="o-vertical-spacing">
            <h3 className="blog-post__headline">
              <span className="skeleton-box" style={{ width: "55%" }} />
            </h3>
            <div className="blog-post__meta">
              <span className="skeleton-box" style={{ width: 70 }} />
            </div>
            <p>
              <span className="skeleton-box" style={{ width: "90%" }} />
              <span className="skeleton-box" style={{ width: "83%" }} />
              <span className="skeleton-box" style={{ width: "80%" }} />
            </p>
          </div>
        </div>
        <div className="o-media__figure">
          <span className="skeleton-box" style={{ width: 100, height: 80 }} />
        </div>
      </li>
    </ul>
  );
};
export default ShimmerMenu;
