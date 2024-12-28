// pages/admin.js
"use client";  // This ensures the code runs on the client-side

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the correct hook for App Router
import Cookies from "js-cookie";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = Cookies.get("isAdmin");

    if (!isAdmin || isAdmin !== "true") {
      // Redirect to login if not an admin
      router.push("/login");
    } else {
      // Redirect to the Admin Home page if the user is an admin
      router.push("/Admin/home");
    }
  }, [router]);

  return null;  // No need to render anything on this page; just handling redirection
}
