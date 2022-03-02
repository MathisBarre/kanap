import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="limitedWidthBlockContainer informations">
        <div className="limitedWidthBlock">
          <ul>
            <li><img src="../images/icons/phone.svg" alt="logo de téléphone" className="informations__phone" />01 23 45 67 89</li>
            <li><img src="../images/icons/mail.svg" alt="logo d'une enveloppe" className="informations__mail" />support@name.com</li>
            <li><img src="../images/icons/adress.svg" alt="logo d'un point de géolocalisation" className="informations__address" />01 23 45 67 89</li>
          </ul>
        </div>
      </div>
      <div className="limitedWidthBlockContainer menu">
        <div className="limitedWidthBlock">
          <a href="./index.html">
            <img className="logo" src="../images/logo.png" alt="Logo de l'entreprise" />
          </a>
          <nav>
            <ul>
              <Link href="/"><a><li>Accueil</li></a></Link>
              <Link href="/cart"><a><li>Panier</li></a></Link>
            </ul>
          </nav>
        </div>
      </div>
      <img className="banniere" src="../images/banniere.png" alt="Baniere" />
    </header>
  )
}