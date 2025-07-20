import Image from "next/image";
import Link from "next/link";

const socialMediaLinks = [
  { id: 1, name: "instagram", href: "https://instagram.com/suneatercoven", icon: "/social/instagram.png" },
  { id: 2, name: "youtube", href: "https://youtube.com/suneatercoven", icon: "/social/youtube.png" },
  { id: 3, name: "tiktok", href: "https://open.tiktok.com/artist/...", icon: "/social/tiktok.png" },
  { id: 4, name: "discord/X", href: "https://discord.com/suneatercoven", icon: "/social/discord.png" },
];

const Contact = () => {
  return (
    <div className="bg-gray-100 pt-28 pb-16 md:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bagian Office */}
        <div className="flex flex-col md:flex-row items-start mt-12 md:mt-16 mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0">
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold leading-tight pt-1">Office :</h2>
          </div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <h3 className="text-2xl sm:text-4xl text-left font-normal leading-tight">
              Sun Eater<br />
              Jalan Merpati II Blok H3 Kav. 1, RT 009, RW 08, Bintaro, Pesanggrahan, Jakarta Selatan. 12330
            </h3>
          </div>
        </div>

        {/* Bagian Contact */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0">
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold leading-tight pt-1">Contact :</h2>
          </div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight underline">Bookings</h3>
            </div>
            <p className="text-lg sm:text-xl font-normal leading-tight mb-4 sm:mb-6">
              If you’re someone who’d like to invite our artists to perform on your show, please contact below.
            </p>
            <div className="text-lg sm:text-xl font-semibold space-y-2 sm:space-y-3">
              <div>
                <h6 className="text-gray-900">.Feast</h6>
                <a href="mailto:feast@suneatercoven.com" className="underline text-black block">feast@suneatercoven.com</a>
              </div>
              <div>
                <h6 className="text-gray-900">Hindia</h6>
                <a href="mailto:qwang@suneatercoven.com" className="underline text-black block">qwang@suneatercoven.com</a>
              </div>
              <div>
                <h6 className="text-gray-900">Lomba Sihir, Aldrian Risjad</h6>
                <a href="mailto:david@suneatercoven.com" className="underline text-black block">david@suneatercoven.com</a>
              </div>
              <div>
                <h6 className="text-gray-900">Mantra Vutura, Agatha Pricilla</h6>
                <a href="mailto:rifandaputri@suneatercoven.com" className="underline text-black block">rifandaputri@suneatercoven.com</a>
              </div>
              <div>
                <h6 className="text-gray-900">Rayhan Noor, G/A/T/E</h6>
                <a href="mailto:ariel@suneatercoven.com" className="underline text-black block">ariel@suneatercoven.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian A & R */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0"></div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight">A & R</h3>
            </div>
            <p className="text-lg sm:text-xl font-normal leading-tight mb-2 sm:mb-3">
              We’re constantly looking for fresh talents. If you want to share your music, feel free to send your demo to the email below.
            </p>
            <a href="mailto:dennis@suneatercoven.com" className="text-lg sm:text-xl font-semibold underline text-black">dennis@suneatercoven.com</a>
          </div>
        </div>

        {/* Bagian Partnership */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0"></div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight">partnership</h3>
            </div>
            <p className="text-lg sm:text-xl font-normal leading-tight mb-2 sm:mb-3">
              If you’re a brand or someone who’d like to have a partnership and collaboration with Sun Eater or our artists, or even wants to know more about Sun Eater, please contact below.
            </p>
            <a href="mailto:natasha@suneatercoven.com" className="text-lg sm:text-xl font-semibold underline text-black">natasha@suneatercoven.com</a>
          </div>
        </div>

        {/* Bagian Careers & Internship */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0"></div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight">careers & internship</h3>
            </div>
            <p className="text-lg sm:text-xl font-normal leading-tight mb-2 sm:mb-3">
              If you want to work with us or join our internship program, mail your cv and portfolio to the email below. Please put “Job Application [Job Position] : [Your Name]” as the subject.
            </p>
            <a href="mailto:people@suneatercoven.com" className="text-lg sm:text-xl font-semibold underline text-black">people@suneatercoven.com</a>
          </div>
        </div>

        {/* Bagian Merchandise */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0"></div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight">merchandise</h3>
            </div>
            <p className="text-lg sm:text-xl font-normal leading-tight mb-2 sm:mb-3">
              If you have any questions or suggestions on our merchandise, please contact below.
            </p>
            <a href="mailto:sundongyang@suneatercoven.com" className="text-lg sm:text-xl font-semibold underline text-black">sundongyang@suneatercoven.com</a>
          </div>
        </div>

        {/* Bagian "for other inquiries" */}
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0"></div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-2 sm:gap-4 ">
              <Link href="/">
                <Image src="/arrow.svg" width={24} height={24} alt="arrow-icon" className="flex-shrink-0" />
              </Link>
              <h3 className="text-3xl sm:text-4xl italic font-normal leading-tight">for other inquiries please contact</h3>
            </div>
            <a href="mailto:booking@suneatercoven.com" className="text-2xl sm:text-4xl font-semibold underline text-black">booking@suneatercoven.com</a>
          </div>
        </div>

        {/* Bagian Follow */}
        <div className="flex flex-col md:flex-row items-start ">
          <div className="w-full md:w-1/5 text-left mb-4 md:mb-0">
            <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold leading-tight pt-1">Follow : </h2>
          </div>
          <div className="text-gray-900 md:w-4/5 font-light md:pl-10">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {socialMediaLinks.map((social) => (
                <Link key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.icon}
                    alt={`${social.name} Logo`}
                    width={50}
                    height={50}
                    className="grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;