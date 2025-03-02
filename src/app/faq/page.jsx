import React from "react";

const FAQ = () => {
  return (
    <>
      {/* FAQ Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800">FAQ</h3>
        <dl className="space-y-8 mt-6">
          <div>
            <dt className="font-semibold text-gray-700">How to Buy Tickets?</dt>
            <dd className="text-gray-500">
              You can buy tickets directly on our website or via our partners
              such as 7-Eleven stores throughout Thailand.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">
              How to Pick Up Tickets?
            </dt>
            <dd className="text-gray-500">
              Once you've purchased your tickets, you can pick them up at any of
              our designated pickup stations or through our delivery service.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">
              Ticket Pickup Station?
            </dt>
            <dd className="text-gray-500">
              Our tickets can be picked up at select 7-Eleven stores and other
              designated locations across Thailand.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-700">Ticket Protection?</dt>
            <dd className="text-gray-500">
              We offer ticket protection for your peace of mind in case of
              unforeseen cancellations or issues.
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default FAQ;
