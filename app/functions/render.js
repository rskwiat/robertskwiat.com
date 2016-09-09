module.exports = function(render){
  return render.map((data) => {
    return(
      <p key={data.key}>{data.copy}</p>
    );
  });
}
