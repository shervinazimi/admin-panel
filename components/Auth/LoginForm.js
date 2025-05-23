import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./LoginForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/auth";

export default function LoginForm() {
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("sucsses Log in:", data);
    },
    onError: (error) => {
      console.log("Faild Login", error.response?.data || error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <div>
      <h1 className={styles.header}>بوت کمپ فرانت اند</h1>
      <div className={styles.container}>
        <Image src="/IMGS/Union.png" alt="logo" width={80} height={85} />
        <h2>فرم ثبت نام</h2>
        <div className={styles.inputs}>
          <input className={styles.inputers} placeholder="نام کاربری"></input>
          <input className={styles.inputers} placeholder="رمز عبور"></input>
          <input
            className={styles.inputers}
            placeholder="تکرار رمز عبور"
          ></input>
          <button type="submit">ثبت نام</button>
          <a href="/signin">حساب کاربری دارید؟</a>
        </div>
      </div>
    </div>
  );
}
