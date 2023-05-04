import React from "react";
import styles from "./Pricing.module.css";
import { Link } from "react-router-dom";

export function Pricing() {
  const registerPageUrl = "/register";

  const memberships = [
    {
      name: "Silver Membership",
      price: "999",
      duration: "Monthly",
      features: [
        "Access to all courses for one month",
        "Certificate of completion",
      ],
    },
    {
      name: "Gold Membership",
      price: "1899",
      duration: "Monthly",
      features: [
        "Access to all courses for 12 months",
        "Certificate of completion",
        "Exclusive discounts on future courses",
      ],
    },
    {
      name: "Platinum Membership",
      price: "2999",
      duration: "Monthly",
      features: [
        "Access to all courses for one month",
        "Certificate of completion",
        "Personalized coaching sessions",
        "Exclusive discounts on future courses",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>
          Get Exclusive Access to Premium Content
        </h1>
        <p className={styles.description}>
          Upgrade your membership to get unlimited access to our premium content
          and take your learning to the next level. Our courses are designed to
          help you improve your skills and achieve your goals.
        </p>
      </div>
      <div className={styles.membership}>
        {memberships.map((membership, index) => (
          <div key={index} className={styles.membership__card}>
            <h1>{membership.name}</h1>
            <div className={styles.rate}>
              <span>₹</span>
              <h3>{membership.price}</h3>
              <span>/ {membership.duration}</span>
            </div>
            {membership.features.map((feature, index) => (
              <div key={index}>{feature}</div>
            ))}
            <Link to={registerPageUrl} className={styles.button}>
              Buy Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
