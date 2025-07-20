import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-black to-gray-800">
        <div className="max-w-screen-lg mx-auto px-7 py-8 md:py-10">
          <div className="text-center mb-4 md:mb-6">
            <Link href="/">
              <Image src="/LogoFooter.png" width={128} height={49} alt="logo" className="mx-auto" />
            </Link>
          </div>

          <div className="mb-8 md:mb-10">
            <p className="text-gray-300 text-justify max-w-screen-lg mx-auto">
              Sun Eater is a hybrid music-entertainment company, aiming to bring Indonesia’s future talents forward.
              Founded in 2019, Sun Eater has seen an exponential growth as a business by harnessing the two most powerful mediums of our age:
              technology and storytelling with a fan-focused approach to grow the audience and develop a deep relevance for its artists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 text-center justify-items-center">
            {/* Links Column */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2 ">Links</h4>
              <ul className="list-item space-y-3 text-gray-300">
                <li>
                  <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/suneatercoven/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</Link>
                </li>
                <li>
                  <Link href="http://www.youtube.com/@SunEaterCoven" target="_blank" rel="noopener noreferrer" className="hover:underline">Youtube</Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@suneater____" target="_blank" rel="noopener noreferrer" className="hover:underline">Tiktok</Link>
                </li>
                <li>
                  <Link href="https://discord.com/invite/suneater" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">Legal</h4>
              <ul className="list-item space-y-3 text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">Legal</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">Adress</h4>
              <ul className="list-item space-y-3 text-gray-300">
                <li>
                  <p href="#" >Sun Eater</p>
                </li>
                <li>
                  <p href="#" >-</p>
                </li>
                <li>
                  <p href="#" >Jalan Merpati II Blok H3 <br />
                    Kav. 1, RT 009, RW 08, Bintaro, Pesanggrahan, <br />
                    Jakarta Selatan. 12330</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-100 py-6 text-center text-base text-gray-100">
          © Copyright 2025 | lovsctnu2 | All Right Reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer;