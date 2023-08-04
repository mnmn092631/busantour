export interface BusanMapProps {
  selectedGugun: string;
  setSelectedGugun: React.Dispatch<React.SetStateAction<string>>;
}

export interface GugunProps {
  onClick: (gugun: string) => void;
  selectedGugun: string;
}
