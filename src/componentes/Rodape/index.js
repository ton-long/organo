import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagens/facebook.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagens/twitter.png`} alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={`${process.env.PUBLIC_URL}/imagens/instagram.png`} alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src={`${process.env.PUBLIC_URL}/imagens/logo.png`} alt="" />
      </section>
    </footer>
  );
};

export default Rodape;
