export interface NotionMember {
    object:           string;
    id:               string;
    created_time:     Date;
    last_edited_time: Date;
    created_by:       TedBy;
    last_edited_by:   TedBy;
    cover:            Cover;
    icon:             Icon;
    parent:           Parent;
    archived:         boolean;
    properties:       Properties;
    url:              string;
    public_url:       null;
}

export interface Cover {
    type:     string;
    external: External;
}

export interface External {
    url: string;
}

export interface TedBy {
    object: string;
    id:     string;
}

export interface Icon {
    type: string;
    file: File;
}

export interface File {
    url:         string;
    expiry_time: Date;
}

export interface Parent {
    type:        string;
    database_id: string;
}

export interface Properties {
    "Joined TUM.ai":                                    CurrentCompany;
    "Data Agreement":                                   DataAgreement;
    Role:                                               AIExpertise;
    "Related to Badges table  (Members who have it) 3": BadgesAchievements;
    "Related to Badges table  (Members who have it)":   BadgesAchievements;
    "AI Expertise":                                     AIExpertise;
    "TUM.ai Buddy":                                     BadgesAchievements;
    "Related to Our Projects (Project Leads)":          BadgesAchievements;
    "Problems you want to solve (Venture Database)":    AIExpertise;
    "Phone Number":                                     CurrentCompany;
    University:                                         AIExpertise;
    "Mentor Commitment":                                CurrentCompany;
    Degree:                                             Degree;
    "Project Lead":                                     BadgesAchievements;
    Property:                                           CurrentCompany;
    "LinkedIn Profile":                                 Profile;
    "Related to Our Projects (Involved Members)":       BadgesAchievements;
    "Functional or Mission-Based Department":           AIExpertise;
    "Current Position":                                 CurrentCompany;
    "P&S Buddy":                                        CurrentCompany;
    "Email Address":                                    CurrentCompany;
    "Badges/Achievements":                              BadgesAchievements;
    "GitHub Profile":                                   Profile;
    "Project Member":                                   BadgesAchievements;
    "Left TUM.ai":                                      CurrentCompany;
    "Related to Badges table  (Members who have it) 1": BadgesAchievements;
    "Which companies have you already worked for?":     CurrentCompany;
    Major:                                              AIExpertise;
    "What are you looking for? (Venture Database)":     AIExpertise;
    Skill:                                              AIExpertise;
    "Related to Badges table  (Members who have it) 2": BadgesAchievements;
    "Home country":                                     AIExpertise;
    "Birthday\ud83c\udf82":                             Birthday;
    "Part of TUM.ai since":                             Birthday;
    "Current Company":                                  CurrentCompany;
    "Home city":                                        AIExpertise;
    "Got gifts worth":                                  CurrentCompany;
    "Person behind":                                    PersonBehind;
    "Related to Tasks IP4 (Responsible)":               BadgesAchievements;
    Name:                                               Name;
}

export interface AIExpertise {
    id:           string;
    type:         AIExpertiseType;
    multi_select: Select[];
}

export interface Select {
    id:    string;
    name:  string;
    color: string;
}

export enum AIExpertiseType {
    MultiSelect = "multi_select",
}

export interface BadgesAchievements {
    id:       string;
    type:     BadgesAchievementsType;
    relation: any[];
    has_more: boolean;
}

export enum BadgesAchievementsType {
    Relation = "relation",
}

export interface Birthday {
    id:   string;
    type: string;
    date: null;
}

export interface CurrentCompany {
    id:        string;
    type:      CurrentCompanyType;
    rich_text: any[];
}

export enum CurrentCompanyType {
    RichText = "rich_text",
}

export interface DataAgreement {
    id:    string;
    type:  string;
    files: any[];
}

export interface Degree {
    id:     string;
    type:   string;
    select: Select;
}

export interface Profile {
    id:   string;
    type: string;
    url:  null;
}

export interface Name {
    id:    string;
    type:  string;
    title: Title[];
}

export interface Title {
    type:        string;
    text:        Text;
    annotations: Annotations;
    plain_text:  string;
    href:        null;
}

export interface Annotations {
    bold:          boolean;
    italic:        boolean;
    strikethrough: boolean;
    underline:     boolean;
    code:          boolean;
    color:         string;
}

export interface Text {
    content: string;
    link:    null;
}

export interface PersonBehind {
    id:     string;
    type:   string;
    people: any[];
}
