console.log("Hey! this is my script");

// Ensure scroll to top on full load
window.addEventListener("load", function () {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
});

const container = document.querySelector(".container");
const homeBtn = document.querySelector(".home");
const pypBtn = document.querySelector(".Pyp");
const booksBtn = document.querySelector(".books");
const notesBtn = document.querySelector(".notes");
const content = document.querySelector(".content");
// const pyBtn = document.querySelector(".pyp");
const notes = document.querySelector(".Notes");

const allButtons = [homeBtn, pypBtn, booksBtn, notesBtn];

document.addEventListener("click", function (e) {
  if (e.target.matches("#backFrom")) {
    console.log("Back button clicked");
    location.reload(); // Or call your custom logic
  }
});

// Subject wise PYQ Data
const subjectData = {
  Maths: [
    {
      label: "MST 2025 (Sem II)",
      link: "https://drive.google.com/file/d/1NNJYLEVEAOz1GiravQGdWQLzf_7tMRaD/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1Nhp5mA6C375j5eHuw-j_BVJJWXdJoOOy/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1NXPGLqaUD0uTPPeQ-mO6pEc_PRZ3-FS7/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1OPqrfiEMgxwxfSatUVvRQv8eqU3_MIvA/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1OdlnQkV3kBM9civ98h3OoANgwlfA-Bub/view?usp=share_link",
    },
    {
      label: "ESE 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OhM4sgujoECHqPoconjhVPkTa13fvJej/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1P2nxJxiniKcqOHKSlBnpD42S9kul4yrl/view?usp=share_link",
    },
  ],
  "B.E.": [
    {
      label: "MST 2025 (Sem II)",
      link: "https://drive.google.com/file/d/1NNSMCP3xuojznBLTgBpuws_taqkQWPkW/view?usp=share_link",
    },
    {
      label: "MST 2025 (Sem II EC)",
      link: "https://drive.google.com/file/d/1Pbq3u_E_w8FPloegJk9iDWVWMpevg8jI/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1OUJh8iy2hejhxqK1VnoE7jjDAtENEDo2/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1P6TCuYhcS0UG4EybRIx44ru__xkj8PyB/view?usp=share_link",
    },
  ],
  Chemistry: [
    {
      label: "ESE 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1Nf83iQCV3927c5ar1FC54REqOOYFKLG5/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1NWm8Z7MXuwESOfaaCENn0NTDzldW6UDm/view?usp=share_link",
    },
    {
      label: "ESE 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OiQT_8L5DcFj5gwsiMq1XOQXKkQLq2bS/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1P3mcSdXFpQzrW2JmVtYWT1BGdOKE6FjX/view?usp=share_link",
    },
  ],
  "Engineering Graphics": [
    {
      label: "MST 2025 (Sem II)",
      link: "https://drive.google.com/file/d/1NOVIiRU-GrV1pcoYTcIHw9s-dSg-h1cN/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1OQl1l70661Z0rocFuWsqfTIDcM0MYWAL/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1P5fZFAHgflr-BBozaOGjheJehS9t315U/view?usp=share_link",
    },
  ],
  "Numerical Techiques": [
    {
      label: "MST 2025 (Sem II)",
      link: "https://drive.google.com/file/d/1NOfxIPvfmrFKM202Z2k4ZxOcGGydq3pk/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1ORolbYY51YoVDTp1MuqYgYKHmHpYTAIN/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1ObeqxnQmkXSRiAWB0oljmijQVApwPD_E/view?usp=share_link",
    },
  ],
  "Applied Physics": [
    {
      label: "MST 2025 (Sem II)",
      link: "https://drive.google.com/file/d/1NP9f29TMSB1qEf1FJK3EF8OL4HaUgk4Q/view?usp=share_link",
    },
    {
      label: "ESE 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1OP-do1c8id1gmajLDNNLaN5NBlW7ZSAL/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem II)",
      link: "https://drive.google.com/file/d/1Oa0-tWzq_RFWAeoOS4QBBsTCwrvN8OxY/view?usp=share_link",
    },
  ],
  "B.E.E.": [
    {
      label: "ESE 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1NoXHnLP0iZIEi1cLGQw2q7O_W8wr8HKK/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1NZK7jq6Ps5D32gwwemlB2QpFlKIhfn-x/view?usp=share_link",
    },
    {
      label: "ESE 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OieAIrFeNdvTGhERiXYaMdlQHkqg3oBK/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OslHlSAssDP4_Y6Jh7gLjIoFeStKIR1e/view?usp=sharing",
    },
  ],
  CPPS: [
    {
      label: "ESE 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1Nic8XN-Y1KTXOqxqznWeFmEQAcU1flES/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1N_1HunsmrseQpd71vVlA2kGmLARA77QR/view?usp=share_link",
    },
    {
      label: "ESE 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1Ohbt9zsh4UfZlriuqwSVdX62Dnu3chgJ/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OsuEeZ_H5AveQgactFPCwlGiHOdwpROB/view?usp=share_link",
    },
  ],
  BSE: [
    {
      label: "ESE 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1Noj2PByfJbcUeRBtXD8iu-0GS9Z8qd-E/view?usp=share_link",
    },
    {
      label: "MST 2024 (Sem I)",
      link: "https://drive.google.com/file/d/1NVz4_85iZkNXGoBudte5uWMqit8iGxdV/view?usp=share_link",
    },
    {
      label: "ESE 2023 (Sem II)",
      link: "https://drive.google.com/file/d/1Oj2TNG95uCkgRzmUNV6n1szKBIgNcx9N/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OslHlSAssDP4_Y6Jh7gLjIoFeStKIR1e/view?usp=share_link",
    },
  ],
  "Engineering Mechanics": [
    { label: "ESE 2024 (Sem I)", link: "https://drive.google.com/file/d/1Nhp5mA6C375j5eHuw-j_BVJJWXdJoOOy/view?usp=share_link" },
    { label: "MST 2024 (Sem I)", link: "https://drive.google.com/file/d/1NYwyQ8IZXBgXB-Ff7V7yqL__jYnV1Qeo/view?usp=share_link" },
    {
      label: "ESE 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OiEiwzOyUl8bndmG1ASeY6d5vow3q8z8/view?usp=share_link",
    },
    {
      label: "MST 2023 (Sem I)",
      link: "https://drive.google.com/file/d/1OslHlSAssDP4_Y6Jh7gLjIoFeStKIR1e/view?usp=sharing",
    },
  ],
};

const booksPageHTML = ` <div class="Books">
        <div class="bookHeader">
        <h2>Digital Books</h2>
        <button id="backFrom" class="back-button">← Back</button>
        </div>
        <h3>No need to buy/carry bulky physical books. Get them all in one place!</h3>
        <div class="book-cards">
            <div class="book-card">
                <img class="book" src="assets/bee.png" data-pdf="https://drive.google.com/file/d/14xPwT0HNDpULLf09UawfxSotWjpn8wA8/view?usp=share_link" alt="bee Book" />
            </div>
            <div class="book-card">
                <img class="book" src="assets/physics-1.png" data-pdf="https://drive.google.com/file/d/14yLPFYT6pcq5Z1fX1cs4G8XjajIYpMja/view?usp=share_link" alt="applied physics 1">
            </div>
            <div class="book-card">
                <img class="book" src="assets/physics-2.png" data-pdf="https://drive.google.com/file/d/152xn0MIYaJCoPp6LRzdGvt4gNplNBxEY/view?usp=share_link" alt="Applied physics II">
            </div>
            <div class="book-card">
                <img class="book" src="assets/nt.png" data-pdf="https://drive.google.com/file/d/154gjy6K4VKNLRP_WvmmkXKTZ5-15XNk6/view?usp=share_link" alt="NT S.S.Sastry">
            </div>
            <div class="book-card">
                <img class="book" src="assets/eg.png" data-pdf="https://drive.google.com/file/d/15XDsSXzibFiEMU7pj1bWZptShijRU8rz/view?usp=share_link" alt="n.d.bhatt">
            </div>
            <div class="book-card">
                <img class="book" src="assets/chemistry.png" data-pdf="https://drive.google.com/file/d/15DuohqC--nkCnrMEWxkheIpa-vxtuA5S/view?usp=share_link" alt="Engineering Chemistry">
            </div>
            <div class="book-card">
                <img class="book" src="assets/c++.png" data-pdf="https://drive.google.com/file/d/15Bx5-vos7bgRmG5C35EtM8xYcfkZ7TGW/view?usp=share_link" alt="C++ Balaguruswamy">
            </div>
            <div class="book-card">
                <img class="book" src="assets/khumbojkar-1.png" data-pdf="https://drive.google.com/file/d/19DlMYv5exnU6eJLg7P4Qkmwg26KQLdrK/view?usp=share_link" alt="Kumbhojkar Sem 1">
            </div>
            <div class="book-card">
                <img class="book" src="assets/khumbojkar-2.png" data-pdf="https://drive.google.com/file/d/1990cKQsYXgSZnIFycvF3O5gE22vX7wHv/view?usp=share_link" alt="Kumbhojkar Sem 2">
            </div>
            <div class="book-card">
                <img class="book" src="assets/dayal.png" data-pdf="https://drive.google.com/file/d/18zPtRPHi0a8PBPYlrEqOwRC1HaQjONmF/view?usp=share_link" alt="MD Dayal">
            </div>
            <div class="book-card">
                <img class="book" src="assets/sedra.png" data-pdf="https://drive.google.com/file/d/19Hvr_xrxubQwpBPqKjGLrr6i49ORNu_g/view?usp=share_link" alt="Sedra & Smith Basic Electronics">
            </div>
            <div class="book-card">
                <img class="book" src="assets/robert.png" data-pdf="https://drive.google.com/file/d/19E5iDf4iCdyQJsWYrVup8td0QfSq0gPW/view?usp=share_link" alt="Basic Electronics Robert L. Boylestad">
            </div>
            <div class="book-card"> 
              <img class="book" src="assets/differential.png" data-pdf="https://drive.google.com/file/d/1KNrZJODGGJLNAhng4e3rXnkZNaFX7AJw/view?usp=share_link" alt="Differential Equations(Maths)">
            </div>  
        </div>
    </div>`;

const pypHTML = `<div class="pyp">
                    <div class="pyp-header">
                        <h2>F.Y. B.Tech 2024-25</h2>
                        <button id="backFrom" class="back-button">← Back</button>
                    </div>
                    <div class="sem">
                        <div class="sem1">
                            <div class="head">
                                <h3>SEM I</h3>
                            </div>
                            <div class="pyp-cards">
                               <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Ni5JPmGgsZ1py8RES1DHRqZlov9mUapJ/view?usp=share_link">Maths(ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NXPGLqaUD0uTPPeQ-mO6pEc_PRZ3-FS7/view?usp=share_link">Maths(MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Nf83iQCV3927c5ar1FC54REqOOYFKLG5/view?usp=share_link">Chemistry(ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NWm8Z7MXuwESOfaaCENn0NTDzldW6UDm/view?usp=share_link">Chemistry(MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Nhp5mA6C375j5eHuw-j_BVJJWXdJoOOy/view?usp=share_link">Engineering Mechanics (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NYwyQ8IZXBgXB-Ff7V7yqL__jYnV1Qeo/view?usp=share_link">Engineering Mechanics (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Nic8XN-Y1KTXOqxqznWeFmEQAcU1flES/view?usp=share_link">CPPS (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1N_1HunsmrseQpd71vVlA2kGmLARA77QR/view?usp=share_link">CPPS (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Nic8XN-Y1KTXOqxqznWeFmEQAcU1flES/view?usp=share_link">B.E.E (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NZK7jq6Ps5D32gwwemlB2QpFlKIhfn-x/view?usp=share_link">B.E.E (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Noj2PByfJbcUeRBtXD8iu-0GS9Z8qd-E/view?usp=share_link">B.S.E (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NVz4_85iZkNXGoBudte5uWMqit8iGxdV/view?usp=share_link">B.S.E (MST)</div>
                            </div>
                        </div>
                        <div class="sem2">
                            <div class="head">
                                <h3>SEM II</h3>
                            </div>
                            <div class="pyp-cards">
                               <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NNJYLEVEAOz1GiravQGdWQLzf_7tMRaD/view?usp=share_link">Maths (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NP9f29TMSB1qEf1FJK3EF8OL4HaUgk4Q/view?usp=share_link">Physics (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NP9f29TMSB1qEf1FJK3EF8OL4HaUgk4Q/view?usp=share_link">E.G. (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NOfxIPvfmrFKM202Z2k4ZxOcGGydq3pk/view?usp=share_link">N.T. (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1NNSMCP3xuojznBLTgBpuws_taqkQWPkW/view?usp=share_link" >B.E. (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Pbq3u_E_w8FPloegJk9iDWVWMpevg8jI/view?usp=share_link" >B.E. (MST, EC)</div>                                
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Ddu4lACQq73o-fDI1MsxUlgYaLyHCxqH/view?usp=share_link">Engineering Mechanics (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1DdGZb56eD41Rkr8eyZQ28LT8vlLkdp74/view?usp=share_link">CPPS (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1DbN2cHuLO1OZAScqxebX9UDOLll5tpus/view?usp=share_link">Chemistry (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1DgLAE9zGhzkSM5NS4NLACsN1sl-guvd1/view?usp=share_link">Thermodynamics (MST, Mech.)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Dj1j5FPYWZDpBL4CT97s6tsx5mIWrLDH/view?usp=share_link">Manufacturing Processes (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1DtO5S_j0Luc7CDRiajiI_Vr84hzeQdbS/view?usp=share_link">IKS (MST, Mech.)</div>
                            </div>
                        </div>
                    </div>
                    <h2>F.Y. B.Tech 2023-24</h2>
                    <div class="sem">
                        <div class="sem1">
                            <div class="head">
                                <h3>SEM I</h3>
                            </div>
                            <div class="pyp-cards">
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OhM4sgujoECHqPoconjhVPkTa13fvJej/view?usp=share_link">Maths (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P2nxJxiniKcqOHKSlBnpD42S9kul4yrl/view?usp=share_link">Maths (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OiQT_8L5DcFj5gwsiMq1XOQXKkQLq2bS/view?usp=share_link">Chemistry(ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P3mcSdXFpQzrW2JmVtYWT1BGdOKE6FjX/view?usp=share_link">Chemistry(MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OiEiwzOyUl8bndmG1ASeY6d5vow3q8z8/view?usp=share_link">Engineering Mechanics (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P3lRO-CpWeiRwm9pLJY2swvVf0RqrJo6/view?usp=share_link">Engineering Mechanics (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Ohbt9zsh4UfZlriuqwSVdX62Dnu3chgJ/view?usp=share_link">CPPS (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OsuEeZ_H5AveQgactFPCwlGiHOdwpROB/view?usp=share_link">CPPS (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OieAIrFeNdvTGhERiXYaMdlQHkqg3oBK/view?usp=share_link">B.E.E (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P5DqGYLJyLJ2iiIccafppDrPy63QQN6i/view?usp=share_link">B.E.E (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Oj2TNG95uCkgRzmUNV6n1szKBIgNcx9N/view?usp=share_link">B.S.E (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OslHlSAssDP4_Y6Jh7gLjIoFeStKIR1e/view?usp=share_link">B.S.E (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OidtbFTlYNA6JPQE9Cva5dBXf2vU9n7E/view?usp=share_link">I.K.S (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OsuwQJI4YePW_OGvmCTVaAlCjEOympAt/view?usp=share_link">I.K.S (MST)</div>
                            </div>
                        </div>
                        <div class="sem2">
                            <div class="head">
                                <h3>SEM II</h3>
                            </div>
                            <div class="pyp-cards">
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OPqrfiEMgxwxfSatUVvRQv8eqU3_MIvA/view?usp=share_link">Maths (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OdlnQkV3kBM9civ98h3OoANgwlfA-Bub/view?usp=share_link">Maths (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OP-do1c8id1gmajLDNNLaN5NBlW7ZSAL/view?usp=share_link">Physics (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1Oa0-tWzq_RFWAeoOS4QBBsTCwrvN8OxY/view?usp=share_link">Physics (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OQl1l70661Z0rocFuWsqfTIDcM0MYWAL/view?usp=share_link">E.G. (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P5fZFAHgflr-BBozaOGjheJehS9t315U/view?usp=share_link">E.G. (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1ORolbYY51YoVDTp1MuqYgYKHmHpYTAIN/view?usp=share_link">N.T. (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1ObeqxnQmkXSRiAWB0oljmijQVApwPD_E/view?usp=sharing">N.T. (MST)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1OUJh8iy2hejhxqK1VnoE7jjDAtENEDo2/view?usp=share_link">B.E. (ESE)</div>
                                <div class="pyp-card" data-pdf="https://drive.google.com/file/d/1P6TCuYhcS0UG4EybRIx44ru__xkj8PyB/view?usp=share_link">B.E. (MST)</div>
                            </div>
                        </div>
                    </div>
                </div>   `;
const notesHtml = `<div class="Notes">
                    <div class="notesHeader">
                        <h1>Notes</h1>
                        <button id="backFrom" class="back-button">← Back</button>
                    </div>
                    <div class="subject">
                        <h2>Chemistry</h2>
                            <div class="notesCards">
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1S4nErMRWAueGwrd3NrHahEIBwv0Wexyt/view?usp=share_link">Reaction Mechanism</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1RXTMjmpeHHrIFMhYmBmSl8QIi0xN1yFA/view?usp=share_link">Fuels and Combustion</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1RSe7gNZVpUleSUzPFtr7HB9PR5zZ0qCE/view?usp=share_link">Spectrocopy</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1SJzE6xb30pXT-ggFC8kZLg6lFV0KJLa7/view?usp=share_link">Flame Photometry</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1RpMxugXvVIp0iAMp5HLY05CJ5E1BOZTU/view?usp=share_link">Sustainable Chemistry</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1SFtdQu-ulOUyvwvDo06te8w9wYGCgLD5/view?usp=share_link">Nanotechnology</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1RHh_0bW_G8Lt_CxmGf4RaOvR--MaeNLP/view?usp=share_link">Chromatography</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1HrGwgdJgf7KjUvBsjnl7DiM6qxLIMun6/view?usp=share_link">Lubricants</div>
                                <div class="notesCard" data-pdf="https://drive.google.com/file/d/1ITg5bYzklQHI2BMJ4T0Nox1vqOSforl4/view?usp=share_link">Corrosion</div>
                                
                            </div>
                        <h2>Computer Programing for Problem Solving</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Ki7VBFek9jeCewwVO_s6G1BHerKVUPIt/view?usp=share_link">Introduction</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1KmbMl242FsruiUwRS9S9jc2AGKSpcINX/view?usp=share_link">Linux Commands</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1L3fubf5UIvJfXiBXVVJZfGPzdZEFddIb/view?usp=share_link">Functions</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1KkanB8idFqc8zGZgKK42pOAgCRy7R2Kp/view?usp=share_link">Data Types and Loops</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1JNA0ZAKOzvGed46YWN8wVzGTNXI_Q3x-/view?usp=share_link">Arrays</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LXXutK3crfdRPIRetFR2FwFg5y6saic-/view?usp=share_link">String Manipulation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Lw2EVFdhTm_NO9_A2oY_Ez17O5D14OEu/view?usp=share_link">Patterns Programs</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LY_2bLPB7GZ42DUVONIpBBeAJM-FeLbh/view?usp=share_link">Constructor and Destructor</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1L8j5wgi4rGHjUnDSWIy6FoWrV7hTM0Ye/view?usp=share_link">Union and Pointer</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1L8WMASJzKuiF0n_T2QUbfp6k9V7_tT18/view?usp=share_link">Structures</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LFQ8UjVOv-7PzsAdSftm8KOf6eHRiJd3/view?usp=share_link">Classes and Objects</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LFa1jZbc9fbGz9XQckmSws4fxKWCi_a1/view?usp=share_link">Array of Object</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LrSEOOnMJ5dZO0nkLMB7TUZvmGwp6LJF/view?usp=share_link">Virtual Base Class</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LbvBHxty_wfjmQWcOV5kujG3S7UeoARV/view?usp=share_link">Polymorphism</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1L_uqYtaM2TLktUJv7ZY9lWRSE5eDXCJA/view?usp=share_link">Inheritance</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Lg0l7Y-k1EweGMfO5pie8_RAoWV4OBrj/view?usp=share_link">File Handling</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Ly094j3y78O1edPkTnuDYbDLVok5lqo9/view?usp=share_link">Remaining notes</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1LWJExR0S7V3xBN1-btg1rebrT_rIR5Sv/view?usp=share_link">Practice Programs</div>
                        </div>
                        <h2>Basic Electronics</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/11B_YsNkvR-1gGgL72Aml9XpWkKTHUeNs/view?usp=share_link">Semiconductors and Rectifier</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/11Dw98BU-Lb5FNi-a3vKyeS5nPPDDB167/view?usp=share_link">Bipolar Junction Transistor</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/11OhXTYDfVAfN7qi49E9JfY8h_i7zpPAN/view?usp=share_link">Digital Electronics</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/11IUMlZc8p4qcAmcyehq3Ws70fGktWS7_/view?usp=share_link">BJT</div>
                        </div>
                        
                        <h2>Maths</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/13LvF1AebXkuvcuvTlRqvhjaB94HKAKzT/view?usp=share_link">Linear Algebra</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/17J0ItA39b35mwzpjy59FDowJsRslTuKS/view?usp=share_link">Vector differential Calculus</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/13MfiWnu1rXPu1rM795Ibe4oUpLQsol6T/view?usp=share_link">Linear Algebra Short Notes</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/17gZzafGEHDCDbLnMdOCfCt5LMW-q9RfS/view?usp=share_link">Line Integral</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/13PKUSoI06_m-wYvAF4lXUB3Rc1US8ogA/view?usp=share_link">List of Formulae</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/15yj-WA_RRL9_GPE4SUa9qY95VucqheGJ/view?usp=share_link">Partial Differentiation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/16VYd90dur3bctrDl65oZOztr11v1KvtX/view?usp=share_link">Complex Differentiation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/14iYmmIz12qnbWM_f1gtfF2bYhorYSwdZ/view?usp=share_link">Mass and Centroid</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/16XtGL4eFovuknANAAoGOnxMgnSAIWNNQ/view?usp=share_link">Complex Analysis</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/16FsTl344rfR3D_9oapXYTu_pkOhXhjbh/view?usp=share_link">Gradient and Directional Derivative</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/185QIynpBV4-zDxUD_3UhR9-eBs1GENhT/view?usp=share_link">Taylor's Series</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/18Zz3c9QYmndgOOgzgLbBh67ib7qdsO9P/view?usp=share_link">Laurent Series</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/18Y6Cqk9m-ucZfJtATV0HuQJGufkfv-Bg/view?usp=share_link">Singularities</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/17hiwgdBPhOOiakS_t7HE6zVNYjg2dOVW/view?usp=sharing">Residue and Radius of Convergence</div>
                        </div>

                        <h2>Engineering Graphics</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Cp1_lasfUQd36TwERHAsoU504_MI8dlT/view?usp=share_link">Engineering Drawing</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1CicfgWhF6MEANzIQl7KJqunCmWuQJBBD/view?usp=share_link">Orthographic Projection</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1B9OpbyidM83T6IuxUYR0cW2YDIMjRiY7/view?usp=share_link">Sectional Orthographic Projection</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1CoPuUJeKLJ62sYchc-ybFbNcN2o2gu_R/view?usp=share_link">Isometric Views</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1CkZgq2sR0PMYQAD3uHUdQb2jGsn0ozRs/view?usp=share_link">Projection of Point and Lines</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1MD7gJssK_5LPNXMcEtQhU-18JAMB3MQH/view?usp=share_link">Projection of Solids</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1CWdLNP6JJAuyFubLIBoYvSMS3p0GEtMi/view?usp=share_link">Section of Solid</div>
                        </div>

                        <h2>Basic Electrical Engineering</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1EAU8rJQYo_ACCYW_ajS-JjKJ9qY1wR-u/view?usp=share_link">DC Circuits</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1EEiNFRqBU2ND9KAGXLG-whzYGUWlgt6p/view?usp=share_link">AC Circuits</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Edadud0Tqnfx23KoJE-z2tDD0wdOrDCD/view?usp=share_link">SERIES RL RC N RLC</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1ECbYoclVFcGdzk9i_9XQNWu3bSa5Uhg3/view?usp=share_link">Series Resonance</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1EE-Yfk0Z62ihPLS8A0W4NxDxtOFDHtuT/view?usp=share_link">Three Phase</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Ej4caytDLTzpUTGEAKFvk0dU0bQKyI1c/view?usp=share_link">Numericals on Module 2</div>
                        </div>

                        <h2>Numerical Techiques</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Aoo2iFwRYtvrrJbvcfkiKYF5XM_2npHr/view?usp=share_link">Module 1-Errors</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1ApvRGD2glhi0ajKCObH1jbgOOfAJeCQP/view?usp=share_link">Mod 2- Linear Algebraic Equation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Aq0VADsswa8oUc4lLa7fSk1FbexbvDqK/view?usp=share_link">Mod 3- Algebraic and Transcendental Equation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1Axv3TSYq3AgHy-v5oBEr3pcTUp_d7luq/view?usp=share_link">Module 4-Interpolation</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/1AsTEovMIdvquzvDu42DEoX6Reo1X03_N/view?usp=share_link">Curve Fitting</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/19witlYEEnJpovoUCEL5Pt6qGRfl2OtJ6/view?usp=share_link">N.T. Practice Questions</div>
                        </div>

                        <h2>Bio Science for Electrical Engineers</h2>
                        <div class="notesCards">
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12BeY-_cS2SK5Ssy7TcczUlVojyAYFwWz/view?usp=share_link">Mod 1-introduction</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12H1FsbirZQSP9ZdzrB48fKaYNvqFr4gS/view?usp=share_link">Mod 2- Bioelectrical Signals and electrodes</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12X73xt2iRQx_CpnyNlhyFA-OMWUamL6A/view?usp=share_link">Mod 3 -Physiological Transducer Part-1</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12YuvXOrjHuJdBRwFcmrVs-v-U6Vj0w2J/view?usp=share_link">Mod 3- Physiological Transducer Part-2</div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12e5sYWoqHtXBbpaXgkYYlH3JPPTNQNC2/view?usp=share_link">Mod 3- Physiological Transducer Part-3 </div>
                            <div class="notesCard" data-pdf="https://drive.google.com/file/d/12lXyF_aQGNUUii-GbGiDLO-au3G4-RDm/view?usp=share_link">Bioscience Textbook</div>
                        </div>
                    </div>
                </div>             `;
// Saving the original homepage content
const homePageHTML = content.innerHTML;

// Helper function to reset all buttons
function resetAllButtons() {
  allButtons.forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";

    const svg = btn.querySelector("svg");
    if (svg) {
      svg.style.color = "";
    }
  });
}

// Helper function to activate a button
function activateButton(btn) {
  btn.style.backgroundColor = "rgb(255, 255, 255)";
  btn.style.color = "#101319";

  const svg = btn.querySelector("svg");
  if (svg) {
    svg.style.color = "#101319";
  }
}

// Attach event listeners for dynamic elements
function attachListeners() {
  // For books
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.addEventListener("click", function () {
      const pdfPath = this.getAttribute("data-pdf");
      window.open(pdfPath, "_blank");
    });
  });
  // Event listener for pyp cards
  const pyp = document.querySelectorAll(".pyp-card");
  pyp.forEach((pyp) => {
    pyp.addEventListener("click", function () {
      const pdfPath = this.getAttribute("data-pdf");
      window.open(pdfPath, "_blank");
    });
  });
  // Event listener for notes cards
  const bookCard = document.querySelectorAll(".notesCard");
  bookCard.forEach((bookCard) => {
    bookCard.addEventListener("click", function () {
      const pdfPath = this.getAttribute("data-pdf");
      window.open(pdfPath, "_blank");
    });
  });
  // For pyq cards
  const pyqCards = document.querySelectorAll(".pyq-card");
  pyqCards.forEach((card) => {
    card.addEventListener("click", () => {
      const subject = card.querySelector(".sub-name").textContent.trim();
      const questions = subjectData[subject] || [];

      let qCardsHTML = "";
      questions.forEach((q) => {
        qCardsHTML += `
                    <div class="q-card" data-link="${q.link}">
                        <span>${q.label}</span>
                    </div>
                `;
      });

      content.innerHTML = `
                <div class="subject-interface">
                    <h2>${subject} Previous Year Papers</h2>
                    <p>Here you can access and download previous year papers for ${subject}.</p>
                    <div class="questions">
                        <div class="qcards">
                            ${qCardsHTML || "<p>No papers available yet.</p>"}
                        </div>
                    </div>
                    <button id="goBackBtn">Go Back</button>
                </div>`;

      attachQCardListeners();
    });
  });
  const viewBtn = document.querySelector(".viewBtn");
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      resetAllButtons();
      activateButton(booksBtn);
      content.innerHTML = booksPageHTML;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50); // small delay
      attachListeners();
    });
  }
  const pypViewBtn = document.querySelector(".viewBtn-pyp");
  if (pypViewBtn) {
    pypViewBtn.addEventListener("click", () => {
      resetAllButtons();
      activateButton(pypBtn);
      content.innerHTML = pypHTML;
      window.scrollTo(0, 0);
      attachListeners();
    });
  }
  const notesViewBtn = document.querySelector(".viewBtn-Notes");
  if (notesViewBtn) {
    notesViewBtn.addEventListener("click", () => {
      resetAllButtons();
      activateButton(notesBtn);
      content.innerHTML = notesHtml;
      notes.style.margin = "0px";
      window.scrollTo(0, 0);
      attachListeners();
    });
  }
}

// Attach listeners to newly created q-cards
function attachQCardListeners() {
  const qCards = document.querySelectorAll(".q-card");
  qCards.forEach((card) => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank");
      }
    });
  });

  // Go Back button
  const goBackBtn = document.getElementById("goBackBtn");
  if (goBackBtn) {
    goBackBtn.addEventListener("click", () => {
      location.reload(); // Simple reload for now
    });
  }
}

// Set Home as active by default
activateButton(homeBtn);
attachListeners(); // Attach listeners for first load

// Home Button
homeBtn.addEventListener("click", () => {
  resetAllButtons();
  activateButton(homeBtn);
  content.innerHTML = homePageHTML;
  window.scrollTo(0, 0);
  attachListeners();
});

// PYP Button
pypBtn.addEventListener("click", () => {
  resetAllButtons();
  activateButton(pypBtn);
  content.innerHTML = pypHTML;
  window.scrollTo(0, 0);
  attachListeners();
});

// Books Button
booksBtn.addEventListener("click", () => {
  resetAllButtons();
  activateButton(booksBtn);
  content.innerHTML = booksPageHTML;
  window.scrollTo(0, 0);
  attachListeners();
});

// Notes Button
notesBtn.addEventListener("click", () => {
  resetAllButtons();
  activateButton(notesBtn);
  content.innerHTML = notesHtml;
  window.scrollTo(0, 0);

  attachListeners();
});
document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("hamburger clicked");
  document.querySelector(".left").style.left = "0%";
});

// Add an event listener for close button
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-120%";
});

function handleResponsiveVisibility() {
  const mediaQuery = window.matchMedia("(max-width: 580px)");
  const hiddenElements = document.querySelectorAll(".hide-on-small");

  hiddenElements.forEach(el => {
    el.style.display = mediaQuery.matches ? "none" : "";
  });
}

// Run on load
handleResponsiveVisibility();

// Run on resize
window.addEventListener("resize", handleResponsiveVisibility);