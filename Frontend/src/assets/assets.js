import BronzeBackground from './AsianHealthFitBronze.jpg'
import SilverBackground from './AsianHealthFitSilver.jpg'
import GoldBackground from './AsianHealthFitGold.jpg'
import PlatinumBackground from './AsianHealthFitPlatinumMale.jpg'
import PlatinumFemaleBackground from './AsianHealthFitPlatinumFemale.jpg'
import SapphireMaleBackground from './AsianHealthFitSapphireMale.jpg'
import SapphireFemaleBackground from './AsianHealthFitSapphireFemale.jpg'

export const TestPrices = {
    HealthPackage: [
        {
            id: "AHP01",
            Test: "75",
            name: "Asian HealthFit Bronze",
            TestInclude: "Sugar Fasting, TSH, Lipid Profile Screening, LFT, KFT, HBA1C, Urine R/E, CBC",
            MRP: "5014",
            Price: 999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: BronzeBackground
        },
        {
            id: "AHP02",
            Test: "86",
            name: "Asian HealthFit Silver",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies",
            MRP: "9499",
            Price: 1999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: SilverBackground
        },
        {
            id: "AHP03",
            Test: "92",
            name: "Asian HealthFit Gold",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies, Ferritin, Apo A1, Apo B, Amylase, HS-CRP, RA Factor, Folate (Folic Acid), Lipase",
            MRP: "12783",
            Price: 2999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: GoldBackground
        },
        {
            id: "AHP04",
            Test: "96",
            name: "Asian HealthFit Platinum - Male",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies, Ferritin, Apo A1, Apo B, Amylase, HS-CRP, RA Factor, Folate (Folic Acid), Lipase, CEA, PSA, Magnesium",
            MRP: "16046",
            Price: 3999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: PlatinumBackground
        },
        {
            id: "AHP05",
            Test: "95",
            name: "Asian HealthFit Platinum - Female",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies, Ferritin, Apo A1, Apo B, Amylase, HS-CRP, RA Factor, Folate (Folic Acid), Lipase, CEA, PSA, Magnesium",
            MRP: "16326",
            Price: 3999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: PlatinumFemaleBackground
        },
        {
            id: "AHP06",
            Test: "100",
            name: "Asian HealthFit Sapphire - Male",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies, Ferritin, Apo A1, Apo B, LP (A), Amylase, HS-CRP, RA Factor, Folate (Folic Acid), Lipase, CEA, PSA, Cortisol, Immunoglobulin IgE, Magnesium",
            MRP: "18669",
            Price: 4999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage: SapphireMaleBackground
        },
        {
            id: "AHP07",
            Test: "100",
            name: "Asian HealthFit Sapphire - Female",
            TestInclude: "Sugar Fasting, Thyroid Profile, Lipid Profile Screening, LFT, KFT, Calcium, Phosporus, HBA1C, Vitamin D, Vitamin B12, Urine R/E, Hemogram, Iron Studies, Ferritin, Apo A1, Apo B, LP (A), Amylase, HS-CRP, RA Factor, Folate (Folic Acid), Lipase, CEA, PSA, Cortisol, Immunoglobulin IgE, Magnesium",
            MRP: "18949",
            Price: 4999,
            notice: "PHC Specialist Doctor Consultation Free",
            backgroundImage:  SapphireFemaleBackground
        }

    ],
    ObsGynae: [
        {
            id:"OBSG01",
            name: "Antel-Natal Panel-1",
            TestInclude: "CBC, Blood Glucose Random, HBSAg, HIV, HCV, VD RL, TSH, Urine R/E",
            MRP: "7240",
            Price: 2200,
        },{
            id:"OBSG02",
            name: "Antel-Natal Panel-2",
            TestInclude: "CBC, Blood Group, Hemoglobin Electrophoresls HP LC, Blood Glucose Random,HBSAg, HIV, VD RL, HCV, TSH, Urine R/E",
            MRP: "9244",
            Price: 2900,
        },{
            id:"OBSG03",
            name: "PCOD Panel",
            TestInclude: "LH, FSH, Testosterone Total, Testosterone Free, Prolactin, Glucose Random, TSH, AMH",
            MRP: "9244",
            Price: 2900,
        },{
            id:"OBSG03",
            name: "PCOD Panel",
            TestInclude: "LH, FSH, Testosterone Total, Testosterone Free, Prolactin, Glucose Random, TSH, AMH",
            MRP: "12374",
            Price: 42200,
        },{
            id:"OBSG04",
            name: "Infertility Comprehensive Panel Female",
            TestInclude: "LH, FSH, Proloctin, Testosterone Free, TSH, Estradiol, AMH",
            MRP: "10866",
            Price: 4450,
        },{
            id:"OBSG05",
            name: "Fertility Panel Male",
            TestInclude: "LH, FSH, Testosterone Total, Testosterone Free, TSH, Prolactin, Semen Analysis",
            MRP: "9972",
            Price: 3500,
        },{
            id:"OBSG06",
            name: "Pre-Conceptional Panel",
            TestInclude: "HBA1C, Hemoglobin Electrophoresis HPLC, TSH, Rubella lg G, Blood Group",
            MRP: "6186",
            Price: 2100,
        }
    ],
    OperativePackage:[
        {
            id:"OP01",
            name: "Pre-Operative Panel Minor",
            TestInclude: "CBC, Blood Group, PT/INR, APTT, Glucose Random, KFT with Electrolyte, HIV, HBsAg, HCV, Urine R/E",
            MRP: "10440",
            Price: 3500,
        },{
            id:"OP02",
            name: "Pre-Operative Panel Major",
            TestInclude: "CBC, Blood Group, PT/INR, APTT, Glucose Random, KFT with Electrolyte, HIV, HBsAg, HCV, Urine R/E, LFT, TSH",
            MRP: "146722",
            Price: 4500,
        }

    ]

};
