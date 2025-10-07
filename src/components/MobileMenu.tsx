export default function MobileMenu() {
  return (
    <div className="md:hidden px-4">
      <div className="bg-white rounded-2xl shadow-soft p-4 space-y-2">
        {['Stories', 'Videos', 'Why Enki', 'Payments', 'Newsletter'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="block py-2">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
