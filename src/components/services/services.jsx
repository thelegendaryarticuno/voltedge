import { services } from '../../constant/servicesConstant';

const Services = () => {
  return (
    <section className="flex flex-col bg-gray-50 dark:bg-neutral-900">
      <div className="bg-sky-100 dark:bg-gray-800 p-4 flex items-center justify-center w-full">
        <h2 className="text-gray-800 dark:text-gray-100 text-2xl font-semibold m-0">
          <span>CONSUMER SERVICES</span>
        </h2>
      </div>
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="text-[#006D77] dark:text-[#83c5cc]">
              {service.icon}
            </div>
            <h3 className="m-0 text-xl text-gray-800 dark:text-gray-100">
              {service.title}
            </h3>
            <p className="m-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
