const Footer = () => {
  return (
    <>
      <p
        className="text-center mt-5"
        style={{
          color: "white",
          fontSize: "13px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        © 1999 - 2023{" "}
        <a
          href="https://www.w3schools.com/"
          style={{ color: "white", margin: "0 2px" }}
        >
          W3schools.
        </a>
        All rights reserved.
        <a
          href="https://www.w3schools.com/about/about_privacy.asp"
          style={{ color: "white" }}
        >
          Cookie policy
        </a>
        ,
        <a
          href="https://www.w3schools.com/about/about_privacy.asp"
          style={{ color: "white", margin: "0 2px" }}
        >
          Privacy
        </a>{" "}
        and{" "}
        <a
          href="https://www.w3schools.com/about/about_copyright.asp"
          style={{ color: "white", margin: "0 2px" }}
        >
          Terms.
        </a>
      </p>
    </>
  );
};

export default Footer;
