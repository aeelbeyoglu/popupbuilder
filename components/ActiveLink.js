import { useRouter } from "next/router";

function ActiveLink({ children, href, className }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${
        router.asPath === href
          ? "border-indigo-500 text-gray-900 "
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
