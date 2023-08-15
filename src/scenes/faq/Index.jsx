import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height="75vh">
      <Header title="FAQ" subtitle="Página de Perguntas Frequentes" />
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: colors.primary[500], color: colors.grey[100] }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Como fazer a troca do produto
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[500] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Como fazer se meu produto vier com defeito
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[500] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Divide em até quantas vezes no cartão
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[500] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Os produtos possuem nota fiscal
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[500] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Como rastrear produto
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[500] }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Como entrar em contato
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa veritatis minus corrupti dolores necessitatibus eveniet esse.
            Sit labore velit illum. Doloribus quaerat dolorem temporibus veniam
            similique? Harum, ad dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
