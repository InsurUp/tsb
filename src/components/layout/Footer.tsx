"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image"; 

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", padding: "60px 0 0" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          padding: "0 20px",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/images/phone-call.svg"
              alt="Telefon"
              width={24}
              height={24}
            />
            <Typography
              sx={{ color: "#00539B", fontWeight: "bold", fontSize: "20px" }}
              className="sm:text-lg! text-base!"
            >
              Phone:{" "}
              <a href="tel:+908505029600" style={{ textDecoration: 'underline', color: 'inherit' }}>
                <Typography
                  component="span"
                  className="sm:text-base! text-xs!"
                  sx={{ color: "#000", fontWeight: "medium", mt:"3px",ml:"4px" }}
                >
                  0850 502 96 00
                </Typography>
              </a>  
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/images/mail.svg" alt="Email" width={24} height={24} />
            <Typography
              sx={{ color: "#00539B", fontWeight: "bold", fontSize: "20px" }}
                className="sm:text-lg! text-base!"
            >
              Email:{" "}
              <a href="mailto:davet@tsb.org.tr" style={{ textDecoration: 'underline', color: 'inherit' }}>
                <Typography
                  component="span"
                  className="sm:text-base! text-xs!"
                  sx={{ color: "#000", fontWeight: "medium", mt:"3px",ml:"4px" }}
                >
                  davet@tsb.org.tr
                </Typography>
              </a>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "10px",  }}>
            <Image
              src="/images/locaiton.svg"
              alt="Address"
              width={24}
              height={24}
            />
            <Typography
              sx={{ color: "#00539B", fontWeight: "bold", fontSize: "18px", display: "flex", alignItems: "start" }}
                className="sm:text-lg! text-base!"
            >
              Address:{" "}
              <Typography
                component="span"
                className="sm:text-base! text-xs!"
                sx={{ color: "#000", fontWeight: "medium", mt:"3px",ml:"4px" }}
              >
                Barbaros Mahallesi Kardelen Sokak No:2
                <br />
                Palladium Tower Kat:30 34746 Ataşehir / İstanbul
              </Typography>
            </Typography>

          </Box>
        </Box>

        <Box
          sx={{
            width: "600px",
            height: "250px",
            position:"relative",
            borderRadius: "8px", 
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.68266228303!2d29.09633331568289!3d40.97909387920788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac251ed5b8217%3A0xc3f8e6b1f2b4c1e4!2sPalladium%20Tower!5e0!3m2!1sen!2str!4v1678912345678!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: 0,borderRadius:"10px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            style={{
              position:"absolute",
              bottom:"-20px",
              left:"50%",
              transform:"translateX(-50%)",
              backgroundColor: "#0094CF",
              color: "#fff",
              padding: "10px 20px", 
              border: "none",
              width:"max-content",
              borderRadius:"100px",
              cursor: "pointer",
              marginTop: "20px", // Düğmeyi haritanın altına almak için eklendi
            }}
            onClick={() => window.open("https://www.tsb.org.tr/en/home", "_blank")}
          >
            Go To The TSB Website
          </button>
        </Box>

      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "40px",
          backgroundColor: "#000",
          paddingBlock: "25px",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "14px", margin: "0 auto", width: "100%" }}>
          © 2025 TSB - All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;