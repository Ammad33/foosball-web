import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CampaignsCard from "./CampaignsCard";
import AddIcon from "@material-ui/icons/Add";
import styles from "./Campaings.module.scss";
import AddCampaign from "../AddCampaign";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import SVG from "react-inlinesvg";
import { makeStyles } from "@material-ui/core/styles";



const campaignsData = [
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Draft",
    influencerImg:
      "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80",
    mediaTag: "brokenl",
  },
  {
    showWarningStatus: true,
    name: "Campaign Name",
    id: 123456,
    status: "Pending",
    influencerImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    mediaTag: "jurica",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Live",
    influencerImg:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    mediaTag: "aatiktas",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Closed",
    influencerImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    mediaTag: "miracle",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Lost",
    influencerImg:
      "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
    mediaTag: "happy",
  },
  {
    showWarningStatus: true,
    name: "Campaign Name",
    id: 123456,
    status: "Draft",
    influencerImg:
      "https://images.unsplash.com/photo-1598538086152-73d85a973709?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    mediaTag: "varlien",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Pending",
    influencerImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    mediaTag: "sooprun",
  },
  {
    showWarningStatus: true,
    name: "Campaign Name",
    id: 123456,
    status: "Live",
    influencerImg:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    mediaTag: "sazzad",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Closed",
    influencerImg:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    mediaTag: "chiefexof",
  },
  {
    showWarningStatus: true,
    name: "Campaign Name",
    id: 123456,
    status: "Lost",
    influencerImg:
      "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    mediaTag: "haris",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Draft",
    influencerImg:
      "https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    mediaTag: "jackson",
  },
  {
    showWarningStatus: false,
    name: "Campaign Name",
    id: 123456,
    status: "Pending",
    influencerImg:
      "https://images.unsplash.com/photo-1590031905406-f18a426d772d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80",
    mediaTag: "andrea",
  },
];
const IconCampaign = () => {
  return <SVG src={require("../../assets/Campaigns_large.svg")} />;
};
const Campaigns = () => {
  const history = useHistory();
  const [active, setActive] = useState("ALL");
  const [campaigns, setCampaigns] = useState([]);
	const [addCampaign, setAddCampagin] = useState(false);

  const getCampaigns = async () => {
    try {
      const campaigns = await API.graphql({
        query: `{
        campaigns(brandId: "8ece73cc-3079-4f45-b7bb-4f6007c8344d") {
          campaigns {
            name
            description
            id
            status
            startDate
            endDate
          }
        }
      }`,
			});
      setCampaigns(campaigns.data.campaigns.campaigns);
    } catch (e) {}
  };

  useEffect(() => {
    getCampaigns();
	}, []);
	


  return (
    <>
			
      <AddCampaign
        open={addCampaign}
        handleCancel={() => setAddCampagin(false)}
      />
      <div className={styles.campaignsContainer}>
        <div className={styles.CampaignHeadingContainer}>
          <div className={styles.CampaignHeading}>
            <span>Campaigns</span>
            <p>
              Most recent <ExpandMoreIcon fontSize="small" />
            </p>
          </div>
          <button onClick={() => setAddCampagin(true)}>
            <AddIcon /> New Campaign
          </button>
        </div>
        <div className={styles.CampaignHeadingButton}>
          <button
            className={active === "ALL" ? styles.allActive : ""}
            onClick={() => setActive("ALL")}
          >
            All
          </button>
          <button
            className={active === "DRAFT" ? styles.draftActive : ""}
            onClick={() => setActive("DRAFT")}
          >
            Draft
          </button>
          <button
            className={active === "PENDING" ? styles.pendingActive : ""}
            onClick={() => setActive("PENDING")}
          >
            Pending
          </button>
          <button
            className={active === "LIVE" ? styles.liveActive : ""}
            onClick={() => setActive("LIVE")}
          >
            Live
          </button>
          <button
            className={active === "CLOSED" ? styles.closedActive : ""}
            onClick={() => setActive("CLOSED")}
          >
            Closed
          </button>
          <button
            className={active === "LAST" ? styles.lostActive : ""}
            onClick={() => setActive("LAST")}
          >
            Lost
          </button>
        </div>
				{campaigns.length == 0 ? (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "15%" }}
          >
            <Grid item xs={12}>
              <IconCampaign />
            </Grid>
            <Grid  item xs={12}>
              <div className={styles.noCampaignYet}>No Campaigns Yet</div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.noCampaignYetHelper}>Click on the button New Campaign button to get started creating a campaign.</div>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <Grid container spacing={3}>
          {campaigns.length > 0 && 
            campaigns.map((campaign) => {
							if (campaign.status !== active && active !== "ALL"){
								return null;
							}
              return (
                <Grid
                  className={styles.gridItem}
                  item
                  key={campaign.id}
                  onClick={() => history.push("/campaignDetail")}
                >
									<CampaignsCard campaign={campaign} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Campaigns;
