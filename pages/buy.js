import { useState } from "react";

import Link from "next/link";

import Radio from "../components/radio/radio.component";
import styles from "../styles/Home.module.css";
import Select from "../components/select/select.component";
import Input from "../components/input/input.component";
import Button from "../components/button/button.component";


const BuyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    plan: "",
  });

  const { name, plan } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <Link href="/welcome">
        <a>Back to previous page</a>
      </Link>
      <h1>Welcome</h1>

      <div>
        <p>What is your plan type?</p>
        <Radio
          options={["Prepaid", "Postpaid"]}
          name="plan"
          value={plan}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Select your board type</p>
        <Select />
      </div>
      <div>
        <p>What is your meter number</p>
        <Input placeholder="Meter number" />
      </div>
      <div>
        <p>How much do you want to top-up?</p>
        <Input placeholder="Top-up amount" />
      </div>
      <Button title="Submit"/>
    </div>
  );
};

export default BuyPage;
