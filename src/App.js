// import logo from './logo.svg';
import './App.css';
import Timeline from './components/Timeline'
import Footer from './components/Footer'


function App() {

  const data = [
    {
      "Key": 1,
      "Year": 2003,
      "Patents": [
        {
          "Key": 11,
          "Patent": "Spray Hydrogel Wound Dressings",
          "TechnicalContent": "Wound dressing formed in situ on the wound by spray application.",
          "Materials": [
            "Polyethylene glycol",
            "Polyvinyl alcohol",
            "Polyvinyl pirrolidone"
          ],
          "Use": "Wound treatment.",
          "Applicants": [
            "Biocure, INC"
          ],
          "Inventors": [
            "Holland, Troy",
            "Chaouk, Hassan",
            "Asfaw, Bruktawit",
            "Goodrich, Stephen",
            "Hunter, Adrian",
            "Francis, Vimala"
          ],
          "Agents": "Beard, Collen"
        }
      ]
    },
    {
      "Key": 2,
      "Year": 2005,
      "Patents": [
        {
          "Key": 21,
          "Patent": "Hydrogel-Containing Medical Articles and Methods of Using and Making the Same",
          "TechnicalContent": "Hydrogel made from a mixture of a biocompatible polymer and a protein.",
          "Materials": [
            "Polyethylene glycol",
            "Soy protein"
          ],
          "Use": "Antimicrobial, analgesic and wound healing activity.",
          "Applicants": [
            "Faure Marie-Pierre",
            "Robert Marielle"
          ],
          "Inventors": [
            "Faure Marie-Pierre",
            "Robert Marielle"
          ],
          "Agents": "Kirkpatrick & Lockhart LLP"
        }
      ]
    },
    {
      "Key": 3,
      "Year": 2008,
      "Patents": [
        {
          "Key": 31,
          "Patent": "A Composite Hydrogel",
          "TechnicalContent": "Composite hydrogel formulation.",
          "Materials": [
            "Hyaluronan",
            "Gelatin"
          ],
          "Use": "Soft tissue substitutes and transitional 3D support structure.",
          "Applicants": [
            "The Research Foundation of State University of New York"
          ],
          "Inventors": [
            "Chen, Weiliam",
            "Weng, Lihui",
            "Pan, Hui"
          ],
          "Agents": "Crews, Lee"
        }
      ]
    },
    {
      "Key": 4,
      "Year": 2009,
      "Patents": [
        {
          "Key": 41,
          "Patent": "Use of a Topical Composition Containing Epidermal Growth Factor (EGF) for Diabetic Foot Amputation Prevention",
          "TechnicalContent": "Topical formulations that contain EGF.",
          "Materials": [
            "Liposomes",
            "EGF",
            "Carbopol 940",
            "Butyl hydroxytoluene (BHT)",
            "Benzylic alcohol",
            "Sodium hydroxide",
            "Glycerol"
          ],
          "Use": "Chronic ischemic skin lesions for preventing diabetic foot amputation.",
          "Applicants": [],
          "Inventors": [
            "Pupo Escalona, Elder",
            "Paez Meireles, Rolando",
            "Berlanga Acosta, Jorge Amador",
            "Betancourt Rodriquez, Blas Yamir"
          ],
          "Agents": "Hoffman & Baron LLP"
        }
      ]
    },
    {
      "Key": 5,
      "Year": 2010,
      "Patents": [
        {
          "Key": 51,
          "Patent": "Topical Hydrogel Composition",
          "TechnicalContent": "Compositions including a suspension of particles or one poorly soluble drug chelated.",
          "Materials": [
            "Carboxymethyl cellulose",
            "Glycerol"
          ],
          "Use": "Carrier for physiological drug release.",
          "Applicants": [
            "Nano Therapeutics, INC"
          ],
          "Inventors": [
            "Talton, James"
          ],
          "Agents": "McGurk, Michael"
        },
        {
          "Key": 52,
          "Patent": "Hydrogel Composition",
          "TechnicalContent": "Hydrogel compositions and preparation methods.",
          "Materials": [
            "Polyvinyl alcohol",
            "Polyethylene glycol"
          ],
          "Use": "Wound healing.",
          "Applicants": [
            "Reliance Life Sciences PVT, LTD"
          ],
          "Inventors": [
            "Dutta, Joydeep",
            "Ghosh, Deepa",
            "Majumdar, Anish",
            "Dwidevi, Garima",
            "Viswanathan, Chandra"
          ],
          "Agents": "Malkani, Purnima"
        }
      ]
    },
    {
      "Key": 6,
      "Year": 2011,
      "Patents": [
        {
          "Key": 61,
          "Patent": "Hydrogel Formulation Comprising Oxidative Reductive Potential Water",
          "TechnicalContent": "Formulation containing an oxidative reduction potential (ORP) water solution and a gelling agent.",
          "Materials": [
            "Metal silicate"
          ],
          "Use": "Oxidative reduction potential for wound healing.",
          "Applicants": [
            "Oculus Innovative Sciences, INC"
          ],
          "Inventors": [
            "Northey, Robert"
          ],
          "Agents": "Leydig, Voit & Mayer, LTD"
        },
        {
          "Key": 62,
          "Patent": "Topical Formulation for Diabetic Foot Ulcers",
          "TechnicalContent": "Topical gel formulation loaded with Esmolol drug.",
          "Materials": [
            "Ethylene oxide",
            "Propylene oxide"
          ],
          "Use": "Chronic wound treatment.",
          "Applicants": [
            "Vlife Sciences Technologies PVT, LTD"
          ],
          "Inventors": [
            "Deshpande, Supreet",
            "Kulkarni, Sudhir",
            "Gollapudy, Reena"
          ],
          "Agents": ""
        }
      ]
    },
    {
      "Key": 7,
      "Year": 2012,
      "Patents": [
        {
          "Key": 71,
          "Patent": "Methods for Treating Diabetic Foot Ulcers",
          "TechnicalContent": "Pharmaceutical formulations peptide-based.",
          "Materials": [
            "Hydroxyethyl cellulose"
          ],
          "Use": "Diabetic foot ulcer pharmaceutical treatment.",
          "Applicants": [
            "University of Southern California"
          ],
          "Inventors": [
            "Rodgers, Kathleen E",
            "diZerega, Gere S"
          ],
          "Agents": ""
        },
        {
          "Key": 72,
          "Patent": "Preventive Ointment for Diabetic Foot",
          "TechnicalContent": "Ointment with antiseptic agents.",
          "Materials": [
            "Polyethylene oxide"
          ],
          "Use": "Diabetic foot ulcer prevention.",
          "Applicants": [
            "Closed Stock Company, Institute of Applied Nanotechnology",
            "Fondazione Salvatore Maugeri Clinica del Lavoro e Della Riabilitazione",
            "SIB Laboratories Limited"
          ],
          "Inventors": [
            "Abramyan, Ara",
            "Afanasyev, Mikhail",
            "Beklemyshev, Viacheslav",
            "Makhonin, Igor",
            "Maugeri, Umberto",
            "Solodovnikov, Vladimir"
          ],
          "Agents": "Gervasi, Gemma"
        }
      ]
    },
    {
      "Key": 8,
      "Year": 2014,
      "Patents": [
        {
          "Key": 81,
          "Patent": "Amniotic Membrane Hydrogel and Methods of Making",
          "TechnicalContent": "Solubilized amniotic membrane (SAM).",
          "Materials": [
            "Natural and synthetic polymers"
          ],
          "Use": "Wound healing and tissue regeneration.",
          "Applicants": [
            "Wake Forest University Health Sciences"
          ],
          "Inventors": [
            "Sean V. Murphy",
            "Aleksander Skardal",
            "Anthony Atala"
          ],
          "Agents": "Saul Ewing Arnstein & Lehr LLP"
        },
        {
          "Key": 82,
          "Patent": "Stable Thermolysin Hydrogel",
          "TechnicalContent": "Hydrophilic gelling agent with non-ionic cellulose ether and active thermolysin.",
          "Materials": [
            "Cellulose ether",
            "Thermolysin"
          ],
          "Use": "Diabetic foot ulcers treatment.",
          "Applicants": [
            "Smith & Nephew, INC"
          ],
          "Inventors": [
            "Shi, Lei",
            "Jovanovic, Aleksa",
            "Carson, Dennis"
          ],
          "Agents": "Krawzsenek, Michael"
        },
        {
          "Key": 83,
          "Patent": "Schiff-Based Aldehydic Hyaluronic Acid-Chitosan Hydrogel Compositions and Uses Thereof",
          "TechnicalContent": "Hydrogel compositions.",
          "Materials": [
            "Hyaluronic acid",
            "Chitosan"
          ],
          "Use": "Dressings for diabetic chronic wounds.",
          "Applicants": [
            "University of Manitoba"
          ],
          "Inventors": [
            "Xing, Malcolm"
          ],
          "Agents": "Polonenko, Daniel"
        }
      ]
    },
    {
      "Key": 9,
      "Year": 2015,
      "Patents": [
        {
          "Key": 91,
          "Patent": "Cowherb Seed Flavonoid Glycoside/Bacterial Cellulose Dressing for Treating Diabetic Foot Ulcers and Preparation Method Thereof",
          "TechnicalContent": "Bacterial cellulose composite with a high molecular polymer solution.",
          "Materials": [
            "Polyvinyl alcohol-styrene pyridinium salt",
            "Bacterial cellulose",
            "Flavonoid glycoside"
          ],
          "Use": "Diabetic foot ulcers treatment",
          "Applicants": [
            "Jiangnan University"
          ],
          "Inventors": [
            "Qiu, Yuyu",
            "Wei, Qufu",
            "Cui, Jing",
            "Qiu, Liying",
            "Du, Bin"
          ],
          "Agents": ""
        },
        {
          "Key": 92,
          "Patent": "Biophotonic Hydrogels",
          "TechnicalContent": "Biophotonic hydrogels formation",
          "Materials": [
            "Polyethylene glycol diacrylate"
          ],
          "Use": "Wound cicatrization and skin rejuvenation",
          "Applicants": [
            "Klox Technologies, INC"
          ],
          "Inventors": [
            "Piergallini, Remigio",
            "Loupis, Nikolaos",
            "Jaworska, Joanna",
            "Devemy, Emmanuelle",
            "Desrosiers, Eric",
            "Chenite, Abdellatif"
          ],
          "Agents": "BCF LLP"
        },
        {
          "Key": 93,
          "Patent": "Interpenetrating Network Hydrogels with Independently Tunable Stiffness",
          "TechnicalContent": "Hydrogel IPN",
          "Materials": [
            "Collagen",
            "Alginate"
          ],
          "Use": "Tissue regeneration and non-healing wounds treatment",
          "Applicants": [
            "President and Fellows of Harvard College"
          ],
          "Inventors": [
            "Branco da Cunha, Cristiana",
            "Chaudhuri, Ovijit",
            "Mooney, David"
          ],
          "Agents": "Zacharakis, Maria"
        }
      ]
    },
    {
      "Key": 10,
      "Year": 2016,
      "Patents": [
        {
          "Key": 101,
          "Patent": "Mesenchymal Stem Cell-Hydrogel-Biodegradable or Mesenchymal Stem Cell-Hydrogel-Undegradable Support Composition for Skin Regeneration or Wound Healing",
          "TechnicalContent": "Mesenchymal stem cell-hydrogel-biodegradable support or mesenchymal stem cell-hydrogel-undegradable support.",
          "Materials": [
            "Polypropylene glycol",
            "Polyethylene glycol"
          ],
          "Use": "Skin regeneration and wound healing.",
          "Applicants": [
            "Anterogen CO, LTD"
          ],
          "Inventors": [
            "Sung-Koo, Lee",
            "Mihyung, Kim",
            "Inok, Kim"
          ],
          "Agents": ""
        },
        {
          "Key": 102,
          "Patent": "Hydrogels for Treating and Ameliorating Wounds and Methods for Making and Using Them",
          "TechnicalContent": "Hydrogel structures for local drug administration.",
          "Materials": [
            "Multiple natural and synthetic polymers"
          ],
          "Use": "Treating and ameliorating infections in chronic wounds targeting multiple drug resistance organisms (MDROs).",
          "Applicants": [
            "Vicus Therapeutics, LLC"
          ],
          "Inventors": [
            "Maki, John",
            "Bascomb, Newell",
            "Young, Fredric",
            "Gill, Eun"
          ],
          "Agents": "Einhorn, Gregory P."
        },
        {
          "Key": 103,
          "Patent": "Treatment of Diabetic Foot Ulcer Using Placental Stem Cells",
          "TechnicalContent": "Compositions of matrices and hydrogel systems comprising placental or isolated placental cells.",
          "Materials": [
            "Polysaccharides such as alginate and salts thereof",
            "Peptides",
            "Polyphosphazines",
            "Polyacrylates",
            "Block polymers such as polyethylene oxide-polypropylene glycol and placental cells"
          ],
          "Use": "Treatment of diabetic foot ulcers.",
          "Applicants": [
            "Anthrogenesis Corporation"
          ],
          "Inventors": [
            "Fischkoff, Steven",
            "Chitkara, Denesh",
            "Herzberg, Uri",
            "Jankovic, Vladimir"
          ],
          "Agents": "Forestal, Colin, A."
        }
      ]
    },
    {
      "Key": 11,
      "Year": 2017,
      "Patents": [
        {
          "Key": 111,
          "Patent": "Preparation Method of Bacteriostatic and Wound Restoration Promoting Chitosan Hydrogel Dressing",
          "TechnicalContent": "Preparation method of a bacteriostatic and wound restoration promoting chitosan hydrogel dressing.",
          "Materials": [
            "Chitosan"
          ],
          "Use": "Wound restoration.",
          "Applicants": [
            "Jiangnan University"
          ],
          "Inventors": [
            "Chen, Jingxiao",
            "Xu, Zheng",
            "Wu, Jing",
            "Chen, Jinghua"
          ],
          "Agents": ""
        }
      ]
    },
    {
      "Key": 12,
      "Year": 2018,
      "Patents": [
        {
          "Key": 121,
          "Patent": "Drug-Loaded Slow-Release Hydrogel Dressing Suitable for Diabetic Foot Nursing",
          "TechnicalContent": "Thermosentitive and drug-loaded hydrogel dressing.",
          "Materials": [
            "Polyethylene glycol",
            "Polyester and curcumin"
          ],
          "Use": "Diabetic foot nursing.",
          "Applicants": [
            "Foshan University"
          ],
          "Inventors": [
            "Wang, Xiaowen",
            "Chen, Dongchu"
          ],
          "Agents": ""
        },
        {
          "Key": 122,
          "Patent": "Hydrogel Composition and Associated Method of Use",
          "TechnicalContent": "Pharmaceutical formulation including a peptide immobilized in a hydrogel.",
          "Materials": [
            "Chitosan",
            "Collagen",
            "Alginate",
            "Agarose",
            "Methylcellulose",
            "Hyaluronan",
            "Laminin",
            "Matrigel",
            "Fibronectin",
            "Vitronectin",
            "Angiopoietin-1 derived peptide (QHREDGS)"
          ],
          "Use": "Treatment of a wound associated with diabetes, such as a diabetic ulcer.",
          "Applicants": [
            "University of Toronto"
          ],
          "Inventors": [
            "Milica, Radisic",
            "Yun, Xiao",
            "Lewis, Reis",
            "Serena, Mandla"
          ],
          "Agents": ""
        },
        {
          "Key": 123,
          "Patent": "Dissolvable Hydrogel Compositions for Wound Management and Methods of Use",
          "TechnicalContent": "Dissolvable hydrogel compositions and methods of use.",
          "Materials": [
            "Thioester",
            "multi-amine"
          ],
          "Use": "Wound treatment, including pressure sores, venous leg ulcers and diabetic foot ulcers.",
          "Applicants": [
            "Trustees of Boston University"
          ],
          "Inventors": [
            "Mark W, Grinstaff",
            "Cynthia, Ghobril",
            "Michel Christophe, Wathier",
            "Marlena Dagmara, Konieczynska"
          ],
          "Agents": "Nixon Peabody LLP"
        },
        {
          "Key": 124,
          "Patent": "Silk Sericin-Based Hydrogel, Methods and Uses Thereof",
          "TechnicalContent": "Novel in-situ sericin hydrogel formation.",
          "Materials": [
            "Sericin"
          ],
          "Use": "Wound healing and chronic wound healing processes, particularly diabetic wounds.",
          "Applicants": [
            "Universidade Católica Portuguesa"
          ],
          "Inventors": [
            "Leite de Almeida, Ana",
            "Macedo Baptista, Sara",
            "Ferreira, Sandra",
            "Pereira, Paulo"
          ],
          "Agents": "Teixeira de Carvalho, Anabela"
        }
      ]
    },
    {
      "Key": 13,
      "Year": 2019,
      "Patents": [
        {
          "Key": 131,
          "Patent": "Method of Treating Defects of Skin and Soft Tissues in Patients with Diabetes Mellitus and Method of Introduction of Drug Therefor",
          "TechnicalContent": "Method of administration of platelet-rich autoplasma (PlRAp) and an application of the G-derm matrix-plastic biomaterial on the wound surface.",
          "Materials": [
            "Platelet-rich autoplasma (PlRAp)",
            "G-derm matrix-plastic biomaterial"
          ],
          "Use": "Treat skin and soft tissue defects in patients with diabetic foot syndrome.",
          "Applicants": [
            ""
          ],
          "Inventors": [
            "Korejba Konstantin, Aleksandrovich",
            "Minabutdinov Ajdar, Ramilevich"
          ],
          "Agents": ""
        }
      ]
    },
    {
      "Key": 14,
      "Year": 2020,
      "Patents": [
        {
          "Key": 141,
          "Patent": "Hydrogel, Pharmaceutical Composition Comprising Same, and Application Thereof",
          "TechnicalContent": "Temperature-sensitive hydrogel and pharmaceutical composition.",
          "Materials": [
            "Ploxamer",
            "Sodium heparin",
            "Glycerin",
            "Water",
            "Growth factors (KGF-2 and FGF-21)"
          ],
          "Use": "Treat the concurrent wounds of diabetes.",
          "Applicants": [
            "Wenzhou Medical University"
          ],
          "Inventors": [
            ""
          ],
          "Agents": "FB Rice Pty Ltd"
        },
        {
          "Key": 142,
          "Patent": "Nanofiber-Hydrogel Composites for Cell and Tissue Delivery",
          "TechnicalContent": "Composite material of fiber-hydrogel with a nanostructure disposed and a biologically active material.",
          "Materials": [
            "Hyaluronic acid",
            "Polycaprolactone",
            "Biologically active materials (growth factor, cytokine, antibody, cell, peptide, protein)"
          ],
          "Use": "Healing soft tissue defects.",
          "Applicants": [
            "The Johns Hopkins University"
          ],
          "Inventors": [
            "Sashank, Reddy",
            "Russell, Martin",
            "Xiaowei, Li",
            "Calvin, Chang",
            "Kevin, Colbert",
            "Hai-Quan, Mao"
          ],
          "Agents": ""
        },
        {
          "Key": 143,
          "Patent": "Nanofiber-Hydrogel Composites for Enhanced Soft Tissue Replacement and Regeneration",
          "TechnicalContent": "Pre-reacted, beaded composite materials comprising a hydrogel and a nanostructure for use in methods for reconstruction of soft tissue.",
          "Materials": [
            "Hyaluronic acid network",
            "Polycaprolactone fibers",
            "PEG",
            "Growth factors"
          ],
          "Use": "Soft tissue reconstruction.",
          "Applicants": [
            "The Johns Hopkins University"
          ],
          "Inventors": [
            "Russell, Martin",
            "Hai-Quan, Mao",
            "Sashank, Reddy",
            "Kevin, Colbert"
          ],
          "Agents": ""
        },
        {
          "Key": 144,
          "Patent": "Hydrogel Wound Treatment",
          "TechnicalContent": "Description of hydrogel compositions with Sambucus nigra, Centella asiatica and Echinacea purpurea with wound-healing effects.",
          "Materials": [
            "Propylene glycol",
            "Guar gum",
            "Alginic acid",
            "Sodium alginate",
            "Potassium alginate",
            "Ammonium alginate",
            "Calcium alginate",
            "Agar",
            "Carrageenan",
            "Gelatin",
            "Sambucus nigra",
            "Centella asiatica",
            "Echinacea purpurea"
          ],
          "Use": "Wound healing processes.",
          "Applicants": [
            "Izun Pharmaceuticals Corp."
          ],
          "Inventors": [
            "Koren, Nechama",
            "Rosenbluh, Amy",
            "Levine, William"
          ],
          "Agents": ""
        },
        {
          "Key": 145,
          "Patent": "Multiphase Gel",
          "TechnicalContent": "Hydrogels polymerized with or around a solid biofunctional moiety, biodegradable or permanent.",
          "Materials": [
            "Denatured proteins"
          ],
          "Use": "Mitigate the formation of tissue adhesions and intended to aid in functional healing.",
          "Applicants": [
            "BVW Holding AG"
          ],
          "Inventors": [
            "Lukas, Bluecher",
            "Michael, Milbocker"
          ],
          "Agents": ""
        },
        {
          "Key": 146,
          "Patent": "Methods of Manufacturing Injectable Microgel Scaffolds",
          "TechnicalContent": "Methods of manufacturing injectable microgel scaffolds that may contain various therapeutic agents, including antibiotics and analgesics.",
          "Materials": [
            "Hyaluronic acid",
            "Poly(N-isopropylacrylamide)",
            "Co-polymer",
            "Poly(hydroxyethylmethacrylate)",
            "Polyethylene oxide"
          ],
          "Use": "Stabilize a medical device implanted at an implant site in a subject and DFU wound healing process.",
          "Applicants": [
            "Tempo Therapeutics, INC."
          ],
          "Inventors": [
            "Westbrook, Weaver",
            "Stephanie, Deshayes",
            "Samuel, Timko"
          ],
          "Agents": ""
        }
      ]
    }
  ];

  return (
    <div className="App">
      <h1 className="main-title">Description of Patents Included in the Study</h1>
      <h1 className="sub-title">Poster 1248 Complementary Information</h1>
      <Timeline key="A1" data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
