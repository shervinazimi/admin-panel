import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./SignInForm.module.css";

export default function SignInForm() {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data :", data);
  };
  return (
    <div>
      <h1 className={styles.header}>بوت کمپ فرانت اند</h1>
      <div className={styles.container}>
        <Image src="/IMGS/Union.png" alt="logo" width={80} height={85} />
        <h2>فرم ورود</h2>
        <div className={styles.inputs}>
          <input className={styles.inputers} placeholder="نام کاربری"></input>
          <input className={styles.inputers} placeholder="رمز عبور"></input>
          <button>ورود</button>
          <a href="/login">ایجاد حساب کاربری؟</a>
        </div>
      </div>
    </div>
  );
}
