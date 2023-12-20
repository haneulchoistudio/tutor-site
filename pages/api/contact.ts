import { NextApiRequest, NextApiResponse } from "next";
import { getEmailUser, sendEmail } from "~/apis/server/mail";

type EmailField = {
  type: string;
  email: string;
  name: string;
  subject: string;
  message: string;
  lang: "en" | "ko";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  if (method !== "POST") {
    res.status(400).end();
    return;
  }

  const body = req.body as EmailField;

  if (!body) {
    res.status(400).end();
    return;
  }

  const sendToSelf = await sendEmail({
    from: getEmailUser(),
    replyTo: body.email,
    to: getEmailUser(),
    subject: body.subject,
    text: body.message,
    html: `
    <div>
    <p style="margin-bottom: 15px; font-size: 16.5px; color: #555;">
        ${
          body.lang === "en"
            ? `Request email received from ${body.name}.`
            : `${body.name}님으로 부터 이메일이 도착했습니다.`
        }
    </p>
    <section style="margin-bottom: 25px;">
    <div>
    <code style="margin-bottom: 2.5px; padding: 5px 10px; font-size: 14px; font-weight: light; background: #222; color: white; border-radius: 1.5rem;">
        ${body.type ?? "Request"}
    </code>
</div>
        <h3 style="margin-bottom: 5.5px; font-size: 18.5px; color: #333;">
            ${body.subject}
        </h3> 
        <p style="font-size: 16.5px; color: #555">
            ${body.message}
        </p>
    </section>
    <div>
        <code style="font-weight: light; font-size: 14.5px; color: #666;">
        ${
          body.lang === "en"
            ? `This mail was sent from <a href="https://tutor.haneulchoi.studio">Sky Teacher's Tutor Site</a>.`
            : `이 메일은 <a href="https://tutor.haneulchoi.studio">하늘 선생님의 튜터 사이트</a>로 부터 전송이 되었습니다.`
        }
        </code>
    </div>
</div>
    `,
  });

  const sendToSender = await sendEmail({
    from: getEmailUser(),
    replyTo: getEmailUser(),
    to: body.email,
    subject:
      body.lang === "en"
        ? `Successfully Sent An Email To Tutor Sky!`
        : "성공적으로 하늘 튜터 선생님께 메일을 보냈습니다.",
    text: body.message,
    html: `
        <div>
            <p style="margin-bottom: 15px; font-size: 16.5px; color: #555;">
                ${
                  body.lang === "en"
                    ? "Successfully sent an email to Haneul Choi."
                    : "최하늘 튜터 선생님께 성공적으로 메일을 보냈습니다."
                }
            </p>
            <section style="margin-bottom: 25px;">
                <div>
                    <code style="margin-bottom: 2.5px; padding: 5px 10px; font-size: 14px; font-weight: light; background: #222; color: white; border-radius: 1.5rem;">
                    ${body.type ?? "Request"}
                    </code>
                </div>
                <h3 style="margin-bottom: 5.5px; font-size: 18.5px; color: #333;">
                    ${body.subject}
                </h3> 
                <p style="font-size: 16.5px; color: #555">
                    ${body.message}
                </p>
            </section>
            <div>
                <code style="font-weight: light; font-size: 14.5px; color: #666;">
                    ${
                      body.lang === "en"
                        ? `This mail was sent from <a href="https://tutor.haneulchoi.studio">Sky Teacher's Tutor Site</a>.`
                        : `이 메일은 <a href="https://tutor.haneulchoi.studio">하늘 선생님의 튜터 사이트</a>로 부터 전송이 되었습니다.`
                    }
                </code>
            </div>
        </div>
    `,
  });

  res.status(200).end();
}
