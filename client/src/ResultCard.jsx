export const ResultCard = ({ document }) => {
  return (
    <div className="card has-background-primary-dark result-card">
      <div className="card-content">
        <div className="content has-text-white">
          <p>
            Θεματικές Κατηγορίες Πράξης: {document._source.thematicCategoryIds}
          </p>
          <p>ΑΔΑ: {document._source.ada}</p>
          <p>Αριθμός Πρωτοκόλλου: {document._source.protocolNumber}</p>
          <p>Θέμα Πράξης: {document._source.subject}</p>
          <p>Ημερομηνία έκδοσης: {document._source["@timestamp"]}</p>
          <p>Κωδικός Φορέα: {document._source.organizationId}</p>
          <p>Κωδικός Τύπου Πράξης: {document._source.decisionTypeId}</p>
          <p>Υπερσύνδεσμος Αρχείου: {document._source.documentUrl}</p>
          {/* <p>Significance: {document._source.sig}</p>
          <p>Event URL: {document._source.url}</p> */}
        </div>
      </div>
    </div>
  );
};
