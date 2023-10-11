export function LinkCrewH1(props) {
  return <div key={props.key} className={"text-2xl text-center md:text-4xl lg:text-6xl xl:text-8xl " + props.className}>{props.title}</div>
}

export function LinkCrewH2(props) {
  return <div key={props.key} className={"text-lg md:text-2xl lg:text-4xl xl:text-6xl " + props.className}>{props.title}</div>
}

export function LinkCrewDiv(props) {
  return <div key={props.key} className={props.className}>{props.title}</div>
}