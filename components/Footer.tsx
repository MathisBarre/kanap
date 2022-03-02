export default function Footer() {
  return (
    <footer>
      <div className="limitedWidthBlockContainer footerMain">
        <div className="limitedWidthBlock">
          <div>
            <img className="logo" src="../images/logo.png" alt="Logo de l'entreprise" />
          </div>
          <div>
            <p>10 quai de la charente <br />75019 Paris 19</p>
          </div>
          <div>
            <p>Téléphone : 01 23 45 67 89</p>
          </div>
          <div>
            <p>Email : support@name.com</p>
          </div>
        </div>
      </div>
      <div className="limitedWidthBlockContainer footerSecondary">
        <div className="limitedWidthBlock">
          <p>© Copyright 2021 - 2042 | Openclassrooms by Openclassrooms | All Rights Reserved | Powered by &lt;3</p>
        </div>
      </div>
    </footer>
  )
}