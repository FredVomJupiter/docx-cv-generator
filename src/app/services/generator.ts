import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun
} from "docx";


const PHONE_NUMBER = "1234567890";
const PROFILE_URL = "https://frederic-rieg.de/";
const EMAIL = "docx@docx.com";

export class DocumentCreator {
    // tslint:disable-next-line: typedef
    public create([experiences, education, skills, achievements]: [any, any, any, any]): Document {
        const document = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            text: "Frederic Rieg",
                            heading: HeadingLevel.TITLE,
                            spacing: {
                                after: 120
                            }
                        }),
                        this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
                        this.createHeading("Education"),
                        ...education
                            .map((edu: any ) => {
                                const arr: Paragraph[] = [];
                                arr.push(
                                    this.createInstitutionHeader(
                                        edu.schoolName,
                                        `${edu.startDate.year} - ${edu.endDate.year}`
                                    )
                                );
                                arr.push(
                                    this.createRoleText(
                                        `${edu.fieldOfStudy} - ${edu.degree}`
                                    )
                                );

                                const bulletPoints = this.splitParagraphIntoBullets(
                                    edu.notes
                                );
                                bulletPoints.forEach(bulletPoint => {
                                    arr.push(this.createBullet(bulletPoint));
                                });

                                return arr;
                            })
                            .reduce((prev: any, curr: any) => prev.concat(curr), []),
                        this.createHeading("Experience"),
                        ...experiences
                            .map((position: { company: { name: string; }; startDate: any; endDate: any; isCurrent: boolean; title: string; summary: string; }) => {
                                const arr: Paragraph[] = [];

                                arr.push(
                                    this.createInstitutionHeader(
                                        position.company.name,
                                        this.createPositionDateText(
                                            position.startDate,
                                            position.endDate,
                                            position.isCurrent
                                        )
                                    )
                                );
                                arr.push(this.createRoleText(position.title));

                                const bulletPoints = this.splitParagraphIntoBullets(
                                    position.summary
                                );

                                bulletPoints.forEach(bulletPoint => {
                                    arr.push(this.createBullet(bulletPoint));
                                });

                                return arr;
                            })
                            .reduce((prev: any, curr: any) => prev.concat(curr), []),
                        this.createHeading("Skills, Achievements and Interests"),
                        this.createSubHeading("Skills"),
                        this.createSkillList(skills),
                        this.createSubHeading("Achievements"),
                        ...this.createAchivementsList(achievements),
                        this.createSubHeading("Interests"),
                        this.createInterests(
                            "All that nice stuff you do but don't get paid for"
                        ),
                        this.createHeading("References"),
                        new Paragraph(
                            "Batman, Superman and Catwoman"
                        ),
                        new Paragraph("More references upon request"),
                        new Paragraph({
                            text:
                                "This CV was automatically generated in real-time.",
                            alignment: AlignmentType.CENTER,
                            spacing: {
                                before: 240
                            }
                        })
                    ]
                }
            ]
        });

        return document;
    }

    public createContactInfo(
        phoneNumber: string,
        profileUrl: string,
        email: string
    ): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun(
                    `Mobile: ${phoneNumber} | Homepage: ${profileUrl} | Email: ${email}`
                ),
                new TextRun({
                    text: "Planet Earth, Milky Way",
                    break: 1
                })
            ],
            spacing: {
                after: 120
            }
        });
    }

    public createHeading(text: string): Paragraph {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_1,
            thematicBreak: true,
            spacing: {
                before: 240
            }
        });
    }

    public createSubHeading(text: string): Paragraph {
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_2,
            spacing: {
                before: 120
            }
        });
    }

    public createInstitutionHeader(
        institutionName: string,
        dateText: string
    ): Paragraph {
        return new Paragraph({
            tabStops: [
                {
                    type: TabStopType.RIGHT,
                    position: TabStopPosition.MAX
                }
            ],
            children: [
                new TextRun({
                    text: institutionName,
                    bold: true
                }),
                new TextRun({
                    text: `\t${dateText}`,
                    bold: true
                })
            ],
            spacing: {
                before: 120
            }
        });
    }

    public createRoleText(roleText: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: roleText,
                    italics: true
                })
            ]
        });
    }

    public createBullet(text: string): Paragraph {
        return new Paragraph({
            text: text,
            bullet: {
                level: 0
            }
        });
    }

    // tslint:disable-next-line:no-any
    public createSkillList(skills: any[]): Paragraph {
        return new Paragraph({
            children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
        });
    }

    // tslint:disable-next-line:no-any
    public createAchivementsList(achivements: any[]): Paragraph[] {
        return achivements.map(
            achievement =>
                new Paragraph({
                    text: achievement.name,
                    bullet: {
                        level: 0
                    }
                })
        );
    }

    public createInterests(interests: string): Paragraph {
        return new Paragraph({
            children: [new TextRun(interests)]
        });
    }

    public splitParagraphIntoBullets(text: string): string[] {
        return text.split("$");
    }

    // tslint:disable-next-line:no-any
    public createPositionDateText(
        startDate: any,
        endDate: any,
        isCurrent: boolean
    ): string {
        const startDateText =
            this.getMonthFromInt(startDate.month) + ". " + startDate.year;
        const endDateText = isCurrent
            ? "Present"
            : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

        return `${startDateText} - ${endDateText}`;
    }

    public getMonthFromInt(value: number): string {
        switch (value) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sept";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
            default:
                return "N/A";
        }
    }
}
