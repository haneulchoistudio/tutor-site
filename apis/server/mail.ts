import { __pv__ as pv } from "./pv";
import type { SendMailOptions } from "nodemailer";
import nodeMailer from "nodemailer";

const nodeMailerUser = pv("NODEMAILER_USER");
const nodeMailerPass = pv("NODEMAILER_PASS");
const nodeMailerHost = pv("NODEMAILER_HOST");

export function createTransport() {
  const transport = nodeMailer.createTransport({
    auth: { user: nodeMailerUser, pass: nodeMailerPass },
    service: nodeMailerHost,
  });
  return transport;
}

export function getEmailUser() {
  return nodeMailerUser;
}

type MailContent = {
  subject: SendMailOptions["subject"];
  to: SendMailOptions["to"];
  from: SendMailOptions["from"];
  text: SendMailOptions["text"];
  html: SendMailOptions["html"];
  attachments?: SendMailOptions["attachments"];
  replyTo: SendMailOptions["replyTo"];
};

export async function sendEmail(body: MailContent) {
  const transport = createTransport();
  const info = await transport.sendMail(body);
  return info.accepted ? info.messageId : false;
}
