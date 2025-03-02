import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We provide the best concert ticketing experience.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              From your favorite artists to seamless ticket purchasing, we make
              it easier than ever to get your tickets to the hottest events.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Image
                      src="https://www.svgrepo.com/show/503163/api-settings.svg"
                      alt="Seamless Ticket Purchase"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Seamless Ticket Purchase
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our platform allows you to purchase concert tickets quickly
                  and effortlessly, ensuring a smooth experience from start to
                  finish.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Image
                      src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                      alt="Real-Time Ticket Availability"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Real-Time Ticket Availability
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Stay updated with real-time availability and never miss out on
                  a chance to see your favorite artist live.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Image
                      src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                      alt="Low Transaction Cost"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Low Transaction Cost
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Enjoy low transaction fees when purchasing tickets, making
                  your experience even more affordable.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <Image
                      src="https://www.svgrepo.com/show/503163/api-settings.svg"
                      alt="Secure and Reliable Transactions"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Secure and Reliable Transactions
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We prioritize your security with encrypted payments and fraud
                  protection, ensuring a safe and reliable ticket purchasing
                  experience.
                </dd>
              </div>
            </dl>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between mt-12">
              {/* Contact Us Section */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
                <p className="mt-4 text-gray-500">
                  For any inquiries, please reach out to us:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:support@allticket.com"
                      className="text-red-600"
                    >
                      support@234ticket.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Sales Support:{" "}
                    <a
                      href="mailto:sales@234ticket.com"
                      className="text-red-600"
                    >
                      sales@234ticket.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Prince of Songkhla University 15 Kanjanawanich Road, Hat Yai
                    District, Songkhla Province 90110 Phone: 0-7428-2000 Fax:
                    0-7455-8941
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0 px-16">
                <h3 className="text-2xl font-bold text-gray-800">FAQ</h3>
                <dl className="mt-4 space-y-1">
                  <dt className="font-semibold text-gray-700">
                    <Link href="/faq">How to Buy Tickets?</Link>
                  </dt>
                  <dt className="font-semibold text-gray-700">
                    <Link href="/faq">How to Pick Up Tickets?</Link>
                  </dt>
                  <dt className="font-semibold text-gray-700">
                    <Link href="/faq">Ticket Pickup Station?</Link>
                  </dt>
                  <dt className="font-semibold text-gray-700">
                    <Link href="/faq">Ticket Protection?</Link>
                  </dt>
                </dl>
              </div>

              {/* About Us Section */}
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-bold text-gray-800">About Us</h3>
                <p className="mt-4 text-gray-500">
                  234Ticket is Thailand's leading online ticketing service for
                  concerts. We operate 24/7 online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
