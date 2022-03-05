import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="limitedWidthBlockContainer informations">
        <div className="limitedWidthBlock">
          <ul>
            <li><Image height={17} width={17} src="/images/icons/phone.svg" alt="logo de téléphone" className="informations__phone" /><div style={{ width : 10 }} />01 23 45 67 89</li>
            <li><Image height={17} width={17} src="/images/icons/mail.svg" alt="logo d'une enveloppe" className="informations__mail" /><div style={{ width : 10 }} />support@name.com</li>
            <li><Image height={17} width={17} src="/images/icons/adress.svg" alt="logo d'un point de géolocalisation" className="informations__address" />01 23 45 67 89</li>
          </ul>
        </div>
      </div>
      <div className="limitedWidthBlockContainer menu">
        <div className="limitedWidthBlock">
          <Link href="/">
            <a>
              <Image height={100} width={84} className="logo" src="/images/logo.png" alt="Logo de l'entreprise" />
            </a>
          </Link>
          <nav>
            <ul>
              <Link href="/"><a><li>Accueil</li></a></Link>
              <Link href="/panier"><a><li>Panier</li></a></Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className="banniere">
        <Image  src="/images/banniere.png" alt="Baniere" layout="fill" objectFit="cover" />
      </div>
    </header>
  )
}