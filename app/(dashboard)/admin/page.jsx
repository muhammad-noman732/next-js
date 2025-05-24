
"use client"; 

import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Button clicked");
    router.push("/contact");
  };

  return (
    <div>
      <button onClick={handleClick}>Navigate to Contact Page</button>
      <p>Admin Page</p>
    </div>
  );
}
