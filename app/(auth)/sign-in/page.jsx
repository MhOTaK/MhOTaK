"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import styles from "@/app/styles/SignIn.module.css";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onSignIn = () => {
    setLoader(true);
    GlobalApi.SignIn(email, password).then(
      (resp) => {
        sessionStorage.setItem("user", JSON.stringify(resp.data.user));
        sessionStorage.setItem("jwt", resp.data.jwt);
        toast("Login Successfully");
        router.push("/");
        setLoader(false);
      },
      (e) => {
        console.log(e);
        toast(e?.response?.data?.error?.message);
        setLoader(false);
      }
    );
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInBox}>
        <Image src={"/next.svg"} width={200} height={200} alt="logo" />
        <h2 className={styles.title}>Sign in to Account</h2>
        <h2 className={styles.subtitle}>
          Enter your Email and Password to Sign In
        </h2>
        <div className={styles.inputContainer}>
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
          <Button onClick={onSignIn} disabled={!(email && password)} className={styles.button}>
            {loader ? <LoaderIcon className="animate-spin" /> : "Sign In"}
          </Button>
          <p className={styles.footerText}>
            Don't have an account?{" "}
            <Link href={"/create-account"} className={styles.link}>
              Click here to create a new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
