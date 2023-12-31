import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PAINEL" subtitle="Bem-vindo ao seu painel" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Baixar relatórios
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mb="50px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12.361"
            subtitle="E-mails enviados"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431.225"
            subtitle="Vendas obtidas"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32.441"
            subtitle="Novos clientes"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1.325.134"
            subtitle="Recepção de tráfego"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                fontWeight="600"
                variant="h5"
                color={colors.grey[100]}
              >
                Receita Gerada
              </Typography>
              <Typography
                fontWeight="bold"
                variant="h3"
                color={colors.greenAccent[500]}
              >
                $59.342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRansactions */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            p="15px"
            alignItems="center"
            color={colors.grey[100]}
            borderBottom={`4px solid ${colors.primary[500]}`}
          >
            <Typography fontWeight="600" variant="h5" color={colors.grey[100]}>
              Transações Recentes
            </Typography>
          </Box>

          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              p="15px"
              alignItems="center"
              color={colors.grey[100]}
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography
                  fontWeight="600"
                  variant="h5"
                  color={colors.greenAccent[500]}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.greenAccent[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}{" "}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          p="30px"
          backgroundColor={colors.primary[400]}
        >
          <Typography fontWeight="600" variant="h5">
            Campanha
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            mt="25px"
            flexDirection="column"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              48,352 Receita Gerada
            </Typography>
            <Typography>Inclui gastos e custos extras diversos</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            fontWeight="600"
            variant="h5"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Quantidade de Vendas
          </Typography>
          <Box mt="-20px" height="250px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography fontWeight="600" variant="h5" sx={{ mb: "15px" }}>
            Tráfego Baseado em Geográfia
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        {/* Final */}
      </Box>
    </Box>
  );
};

export default Dashboard;
