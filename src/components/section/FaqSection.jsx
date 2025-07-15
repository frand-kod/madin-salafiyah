import FAQItem from "../partial/Footer/FaqItem";
import faqs from '../../assets/faqs.json'

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 mb-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-secondary text-gray-100 px-2 ">Punya pertanyaan?</span>
        <p className="text-s text-gray-800 mt-4"> Kami Tanggapi dengan senang hati </p>
          </h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
