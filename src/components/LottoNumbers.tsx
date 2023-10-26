type ArrayOfNumbers = {
  numbers: number [],
};

function LottoNumbers({ numbers }: ArrayOfNumbers) {
  if (numbers.length === 6) {
    return (
      <h3>
        Os números sorteados são:
        <ul>
          {
            numbers.map((element) => (
              <li key={ element }>
                { element }
              </li>
            ))
          }
        </ul>
      </h3>
    );
  }
  return <h3>Erro: a lista não contém 6 números</h3>;
}

export default LottoNumbers;
