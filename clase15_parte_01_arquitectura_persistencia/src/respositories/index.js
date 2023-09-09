import { Contacts } from "../DAO/factory.js";
import ContactRepository from "./contacts.repository.js";

export const contactsService = new ContactRepository(new Contacts())