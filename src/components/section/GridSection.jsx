import {Link} from 'react-router-dom';
import SectionTitle from '../ui/Title';

export default function MiniSection({id, title, link, children}) {
  return (
    <section id={id} className="py-12 px-4 md:px-12 bg-gray-100 shadow-sm mb-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4 ">
        <SectionTitle>{title}</SectionTitle>
        {link && (
          <Link to={link} className="text-sm text-primary hover:underline transision ease-in ease-out  mt-2 md:mt-0">
            Lihat Selengkapnya →
          </Link>
        )}
      </div>
      <div>
        {children}
        
      </div>
      
    </section>
  );
}