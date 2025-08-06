"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", padding: "40px 0 0" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "0 20px",
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
            >
              Phone:{" "}
              <Typography
                component="span"
                sx={{ color: "#000", fontSize: "16px", fontWeight: "medium" }}
              >
                0850 502 96 00
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/images/mail.svg" alt="Email" width={24} height={24} />
            <Typography
              sx={{ color: "#00539B", fontWeight: "bold", fontSize: "20px" }}
            >
              Email:{" "}
              <Typography
                component="span"
                sx={{ color: "#000", fontSize: "16px", fontWeight: "medium" }}
              >
                davet@tsb.org.tr
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <Image
              src="/images/locaiton.svg"
              alt="Address"
              width={24}
              height={24}
            />
            <Typography
              sx={{ color: "#00539B", fontWeight: "bold", fontSize: "20px" }}
            >
              Address:{" "}
              <Typography
                component="span"
                sx={{ color: "#000", fontSize: "16px", fontWeight: "medium" }}
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
            width: "400px",
            height: "200px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6">Harita Yer Tutucu</Typography>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => window.open("https://www.tsb.org.tr", "_blank")}
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