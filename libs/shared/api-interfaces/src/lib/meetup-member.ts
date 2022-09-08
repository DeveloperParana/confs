export interface MeetupMember {
  id: number;
  name: string;
  bio?: string;
  status: string;
  joined: number;
  city: string;
  country: Country;
  localized_country_name: LocalizedCountryName;
  lat: number;
  lon: number;
  photo?: Photo;
  group_profile: GroupProfile;
  is_pro_admin: boolean;
  state?: string;
}

export enum Country {
  Au = 'au',
  Br = 'br',
  CA = 'ca',
  Nl = 'nl',
  Us = 'us',
}

export interface GroupProfile {
  status: string;
  visited: number;
  created: number;
  updated: number;
  role?: Role;
  group: Group;
  link: string;
  intro?: string;
  title?: string;
}

export interface Group {
  id: number;
  urlname: string;
  name: string;
  status: string;
  who: string;
  members: number;
  join_mode: string;
  localized_location: string;
}

export enum Role {
  AssistantOrganizer = 'assistant_organizer',
  Coorganizer = 'coorganizer',
  EventOrganizer = 'event_organizer',
  Organizer = 'organizer',
}

export enum LocalizedCountryName {
  Australia = 'Australia',
  Brazil = 'Brazil',
  Canada = 'Canada',
  Netherlands = 'Netherlands',
  Usa = 'USA',
}

export interface Photo {
  id: number;
  highres_link: string;
  photo_link: string;
  thumb_link: string;
  type: Type;
  base_url: string;
}

export enum Type {
  Member = 'member',
}
