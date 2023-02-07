export const ResultCard = ({ document }) => {
  return (
    <div class="card has-background-primary result-card">
      <div class="card-content">
        <div class="content has-text-white">
          <p>Type: {document._source.type}</p>
          <p>Time: {document._source["@timestamp"]}</p>
          <p>Location: {document._source.place}</p>
          <p>Latitude: {document._source.coordinates.lat}</p>
          <p>Longitude: {document._source.coordinates.lon}</p>
          <p>Magnitude: {document._source.mag}</p>
          <p>Depth: {document._source.depth}</p>
          <p>Significance: {document._source.sig}</p>
          <p>Event URL: {document._source.url}</p>
        </div>
      </div>
    </div>
  );
};
