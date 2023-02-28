import axios from "axios";
import { useState } from "react";
import "./App.css";
import SearchResults from "./SearchResults";

const App = () => {
  const [chosenDecisionTypeId, setDecisionTypeId] = useState("");
  // const [chosenDocumentType, setChosenDocumentType] = useState("");
  const [chosenAda, setChosenAda] = useState("");
  const [chosenProtocolNumber, setChosenProtocolNumber] = useState("");
  // const [chosenSubject, setChosenSubject] = useState("");
  const [chosenDateRange, setChosenDateRange] = useState("");
  // const [chosenSortOption, setchosenSortOption] = useState("");

  const [chosenThematicCategory, setChosenThematicCategory] = useState("");
  const [chosenDocumentType, setChosenDocumentType] = useState("");
  const [chosenprocessingState, setChosenProcessingState] = useState("");
  const [chosencorrectedVersion, setChosenCorrectedVersion] = useState("");
  const [chosenNumberOfRelatedDocs, setChosenNumberOfRelatedDocs] =
    useState("");
  const [chosenProtocolNumberState, setChosenProtocolNumberState] =
    useState("");

  const [documents, setDocuments] = useState(null);

  const sendSearchRequest = () => {
    const results = {
      method: "GET",
      url: "http://localhost:3001/results",
      params: {
        decisionTypeId: chosenDecisionTypeId,
        // documentType: chosenDocumentType,
        ada: chosenAda,
        protocolNumber: chosenProtocolNumber,
        // subject: chosenSubject,
        dateRange: chosenDateRange,
        // sortOption: chosenSortOption,
      },
    };

    axios
      .request(results)
      .then((response) => {
        console.log(response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="div has-background-grey page">
      <nav
        className="navbar has-background-grey"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-end field is-grouped">
          <div className="navbar-item">
            <div class="field is-grouped">
              <p className="control">
                <div className="button has-background-primary-dark has-text-white">
                  <span>
                    <strong>Είσοδος</strong>
                  </span>
                </div>
              </p>
              <p className="control">
                <div className="button is-light">
                  <span>
                    <strong>Εγγραφή</strong>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <h1 className="title has-text-white pd-3">
          Documents Advanced Search Engine
        </h1>
        <h2 className="subtitle has-text-white mt-3 pd-3">
          Search for desired documents using the following criteria:
        </h2>
      </section>
      <section className="section">
        <div className="field is-grouped">
          <p className="control select dropdown-trigger">
            <select
              name="decisionTypeId"
              id="decisionTypeId"
              value={chosenDecisionTypeId}
              onChange={(e) => setDecisionTypeId(e.target.value)}
            >
              <option value={null}>Τύπος Κατηγορίας Πράξης</option>
              <option value="100">100</option>
              <option value="2.4.1">2.4.1</option>
              <option value="2.4.2">2.4.2</option>
              <option value="2.4.3">2.4.3</option>
              <option value="2.4.4">2.4.4</option>
              <option value="2.4.5">2.4.5</option>
              <option value="2.4.6">2.4.6</option>
              <option value="2.4.6.1">2.4.6.1</option>
              <option value="2.4.7">2.4.7</option>
              <option value="2.4.7.1">2.4.7.1</option>
              <option value="2.4.8">2.4.8</option>
              <option value="Α.1.1">Α.1.1</option>
              <option value="Α.1.2">Α.1.2</option>
              <option value="Α.2">Α.2</option>
              <option value="Α.3">Α.3</option>
              <option value="Α.4">Α.4</option>
              <option value="Α.5">Α.5</option>
              <option value="Α.6">Α.6</option>
              <option value="Α.7">Α.7</option>
              <option value="Β.1.1">Β.1.1</option>
              <option value="Β.1.2">Β.1.2</option>
              <option value="Β.1.3">Β.1.3</option>
              <option value="Β.2.1">Β.2.1</option>
              <option value="Β.2.2">Β.2.2</option>
              <option value="Β.3">Β.3</option>
              <option value="Β.4">Β.4</option>
              <option value="Β.5">Β.5</option>
              <option value="Β.6">Β.6</option>
              <option value="Γ.2">Γ.2</option>
              <option value="Γ.3.1">Γ.3.1</option>
              <option value="Γ.3.2">Γ.3.2</option>
              <option value="Γ.3.3">Γ.3.3</option>
              <option value="Γ.3.4">Γ.3.4</option>
              <option value="Γ.3.5">Γ.3.5</option>
              <option value="Γ.3.6">Γ.3.6</option>
              <option value="Δ.1">Δ.1</option>
              <option value="Δ.2.1">Δ.2.1</option>
              <option value="Δ.2.2">Δ.2.2</option>
              <option value="Ε.1">Ε.1</option>
              <option value="Ε.2">Ε.2</option>
              <option value="Ε.3">Ε.3</option>
              <option value="Ε.4">Ε.4</option>
              <option value="Ζ.1">Ζ.1</option>

              {/* <div class="navbar-start">
              
                <a class="navbar-link">More</a>
                <div class="navbar-dropdown">
                  <div class="nested navbar-item dropdown">
                    <div class="dropdown-trigger">
                      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                          Dropdown item
                        </a>
                        <a class="dropdown-item">
                          Other dropdown item
                        </a>
                        <a href="#" class="dropdown-item is-active">
                          Active dropdown item
                        </a>
                        <a href="#" class="dropdown-item">
                          Other dropdown item
                        </a>
                        <div class="nested dropdown dropdown-item">
                          <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                              <span>Dropdown button</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                              <a href="#" class="dropdown-item">
                                Dropdown item
                              </a>
                              <a class="dropdown-item">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item is-active">
                                Active dropdown item
                              </a>
                              <a href="#" class="dropdown-item">
                                Other dropdown item
                              </a>
                              <a href="#" class="dropdown-item">
                                With a divider
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div> */}
            </select>
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Εισαγωγή Αριθμού Πρωτοκόλλου"
              value={chosenProtocolNumber}
              onChange={(e) => setChosenProtocolNumber(e.target.value)}
            />
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Εισαγωγή Αριθμού Διαδικτυακής Ανάρτησης (ΑΔΑ)"
              value={chosenAda}
              onChange={(e) => setChosenAda(e.target.value)}
            />
          </p>
          <p className="control select">
            <select
              name="dateRange"
              id="dateRange"
              value={chosenDateRange}
              onChange={(e) => setChosenDateRange(e.target.value)}
            >
              <option value={null}>Χρονικό Εύρος</option>
              <option value="1">Past 24 Hours</option>
              <option value="7">Past 7 Days</option>
              <option value="30">Past 30 Days</option>
              <option value="90">Past 90 Days</option>
              <option value="180">Past 6 Months</option>
              <option value="360">Past 1 Year</option>
            </select>
          </p>
          {/* <p className="control select">
            <select
              name="sortOption"
              id="sortOption"
              value={chosenSortOption}
              onChange={(e) => setchosenSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="desc">Largest Thematic Category ID First</option>
              <option value="asc">Smallest Thematic Category ID First</option>
            </select>
          </p> */}
          {/* <p className="control">
            <button
              className="button"
              onClick={sendSearchRequest}
              disabled={!chosenDecisionTypeId || !chosenDateRange}
            >
              Search
            </button>
          </p>
          <p className="control">
            <a
              target="_blank"
              className="button"
              // href="http://localhost:5601/app/dashboards#/view/7fd7ac60-a269-11ed-90b9-8332e38098bc?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-query-input=true&show-time-filter=true"
              href="http://localhost:5601/app/dashboards#/view/a7ff4bf0-af64-11ed-9587-1147dd9f97b2?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
              rel="noreferrer"
            >
              Visualizations
            </a>
          </p> */}
          {/* -------------------------------------------------------------------------------------------------------------------- */}
        </div>
        <div className="field is-grouped is-grouped-centered">
          <p className="control select">
            <select
              name="thematicCategory"
              id="thematicCategory"
              value={chosenThematicCategory}
              onChange={(e) => setChosenThematicCategory(e.target.value)}
              disabled
            >
              <option className="has-text-centered" value={null}>
                Κατηγορία Πράξης
              </option>
              <option value="ΠΡΑΞΗ ΑΝΑΠΤΥΞΙΑΚΟΥ ΝΟΜΟΥ">
                ΠΡΑΞΗ ΑΝΑΠΤΥΞΙΑΚΟΥ ΝΟΜΟΥ
              </option>
              <option value="ΠΡΑΞΗ ΝΟΜΟΘΕΤΙΚΟΥ ΠΕΡΙΕΧΟΜΕΝΟΥ">
                ΠΡΑΞΗ ΝΟΜΟΘΕΤΙΚΟΥ ΠΕΡΙΕΧΟΜΕΝΟΥ
              </option>
              <option value="ΔΙΟΡΙΣΜΟΣ">ΔΙΟΡΙΣΜΟΣ</option>
              <option value="ΕΓΚΥΚΛΙΟΣ">ΕΓΚΥΚΛΙΟΣ</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="documentType"
              id="documentType"
              value={chosenDocumentType}
              onChange={(e) => setChosenDocumentType(e.target.value)}
              disabled
            >
              <option className="has-text-centered" value={null}>
                Τύπος Εγγράφου
              </option>
              <option value="ΕΙΣΕΡΧΟΜΕΝΟ">ΕΙΣΕΡΧΟΜΕΝΟ</option>
              <option value="ΕΞΕΡΧΟΜΕΝΟ">ΕΞΕΡΧΟΜΕΝΟ</option>
              <option value="ΕΣΩΤΕΡΙΚΟ">ΕΣΩΤΕΡΙΚΟ</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="processingState"
              id="processingState"
              value={chosenprocessingState}
              onChange={(e) => setChosenProcessingState(e.target.value)}
              disabled
            >
              <option className="has-text-centered" value={null}>
                Στάδιο Διεκπεραίωσης
              </option>
              <option value="Διεκπεραιωμένο">Διεκπεραιωμένο</option>
              <option value="Όχι Διεκπεραιωμένο">Όχι Διεκπεραιωμένο</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="correctedVersion"
              id="correctedVersion"
              value={chosencorrectedVersion}
              onChange={(e) => setChosenCorrectedVersion(e.target.value)}
              disabled
            >
              <option className="has-text-centered" value={null}>
                Επίπεδο Σύνταξης
              </option>
              <option value="Normal Version">Αρχική Σύνταξη</option>
              <option value="Corrected Repeat">Ορθή Επανάληψη</option>
            </select>
          </p>
          <p className="control select">
            <select
              name="numberOfRelateDocs"
              id="numberOfRelateDocs"
              value={chosenNumberOfRelatedDocs}
              onChange={(e) => setChosenNumberOfRelatedDocs(e.target.value)}
              disabled
            >
              <option value={null}>Αριθμός Σχετιζόμενων Αρχείων</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="Other">Other</option>
            </select>
          </p>
          <p className="control select ">
            <select
              name="protocolNumberState"
              id="protocolNumberState"
              value={chosenProtocolNumberState}
              onChange={(e) => setChosenProtocolNumberState(e.target.value)}
              disabled
            >
              <option className="has-text-centered" value={null}>
                Κατάσταση Πρωτοκόλλου Εγγράφου
              </option>
              <option value="Valid">Έγκυρο Πρωτόκολλο</option>
              <option value="cancelled">Άκυρο Πρωτόκολλο</option>
            </select>
          </p>
        </div>
        <div className="buttons is-centered">
          <p className="control">
            <button
              className="button has-background-primary-dark has-text-white fa-magnifying-glass"
              onClick={sendSearchRequest}
              // disabled={!chosenDateRange}
            >
              Αναζήτηση
            </button>
          </p>
          <p className="control">
            <a
              target="_blank"
              className="button has-background-primary-dark has-text-white"
              // href="http://localhost:5601/app/dashboards#/view/7fd7ac60-a269-11ed-90b9-8332e38098bc?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Fd%2Cto%3Anow))&show-query-input=true&show-time-filter=true"
              href="http://localhost:5601/app/dashboards#/view/a7ff4bf0-af64-11ed-9587-1147dd9f97b2?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15d%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
              rel="noreferrer"
            >
              Οπτικοποιήσεις
            </a>
          </p>
        </div>
      </section>
      <section className="section">
        <SearchResults documents={documents} />
      </section>
    </div>
  );
};

export default App;
