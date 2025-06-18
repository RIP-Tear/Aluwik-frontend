export interface Service {
  id: string;
  uuid: string;
  createdAt: string;
  title: string;
  description: string;
  public: boolean;
  content: string[];
  contentIcon: string[];
  profitsTitle: string[];
  profitsDescription: string[];
  tooltip: string;
}
export interface ServicesData {
  services: Service[];
}
