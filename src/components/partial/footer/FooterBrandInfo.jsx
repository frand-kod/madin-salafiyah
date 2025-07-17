import Title from "../../ui/Title";
import HoverUnderlineIcon from "../../ui/HoverUnderline"; // atau sesuaikan path

export default function FooterBrandInfo() {
  const socials = [
    { href: "#", icon: "🌐", label: "Website" },
    { href: "#", icon: "📷", label: "Instagram" },
    { href: "#", icon: "🐦", label: "Twitter" },
    { href: "#", icon: "📘", label: "Facebook" },
    { href: "#", icon: "▶️", label: "YouTube" },
  ];

  return (
    <div>
      <Title>Madrasah Diniyyah Salafiyyah</Title>
      <p className="text-md text-gray-600 mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus nisi impedit consectetur. Neque nesciunt, necessitatibus, aspernatur omnis repudiandae, ut possimus iste illo officiis ab sunt dolores non optio assumenda?
      </p>

      <p className="text-md text-gray-600">
        Jl. Contoh No.123, Jakarta Selatan <br />
        info@madrasahkomplek-l.or.id
      </p>

      <div className="flex space-x-5 mt-3">
        {socials.map((socmed, idx) => (
          <HoverUnderlineIcon key={idx} {...socmed} />
        ))}
      </div>
    </div>
  );
}
