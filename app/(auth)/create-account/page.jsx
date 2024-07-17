"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import styles from "@/app/styles/CreateAccount.module.css";  // CSS modülünü dahil ediyoruz

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onCreateAccount = () => {
    setLoader(true);
    GlobalApi.registerUser(username, email, password).then(
      (resp) => {
        console.log(resp.data.user);
        console.log(resp.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(resp.data.user));
        sessionStorage.setItem("jwt", resp.data.jwt);
        toast("Account created successfully");
        router.push("/");
        setLoader(false);
      },
      (e) => {
        setLoader(false);
        toast(e?.response?.data?.error?.message);
      }
    );
  };

  return (
    <div className={styles.createAccountContainer}>
      <div className={styles.createAccountBox}>
        <Image src={"/next.svg"} width={200} height={200} alt="logo" />
        <h2 className={styles.title}>Create an Account</h2>
        <h2 className={styles.subtitle}>
          Enter your Username, Email, and Password to Create an account
        </h2>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className={styles.input}
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={onCreateAccount}
            disabled={!(username && email && password)}
            className={styles.button}
          >
            {loader ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              "Create an Account"
            )}
          </Button>
          <p className={styles.footerText}>
            Already have an account?{" "}
            <Link href={"/sign-in"} className={styles.link}>
              Click here to Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
