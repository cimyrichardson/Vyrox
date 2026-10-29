import { Button } from "@/components/ui/Button";

type InquiryFormProps = {
  kind: "contact" | "quote";
  initialConcern?: string;
};

export function InquiryForm({ kind, initialConcern = "" }: InquiryFormProps) {
  const isQuote = kind === "quote";
  const formId = isQuote ? "quote-form" : "contact-form";

  return (
    <form
      id={formId}
      className="rounded-card border border-primary/10 bg-white p-5 sm:p-7"
    >
      <div className="mb-6 rounded-control border border-amber-700/20 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        Le formulaire est en préparation : l’envoi n’est pas encore activé.
        Aucune information saisie ici ne sera transmise ni enregistrée.
      </div>
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">
          {isQuote ? "Votre demande de devis" : "Votre message"}
        </legend>
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Nom et prénom <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            required
            disabled
            className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
          />
        </div>
        {isQuote ? (
          <div>
            <label
              htmlFor={`${formId}-company`}
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Entreprise <span className="font-normal text-text-muted">(facultatif)</span>
            </label>
            <input
              id={`${formId}-company`}
              name="company"
              autoComplete="organization"
              disabled
              className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
            />
          </div>
        ) : null}
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Adresse e-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled
            className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
          />
        </div>
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2 block text-sm font-semibold text-primary"
          >
            Téléphone{" "}
            <span className="font-normal text-text-muted">
              {isQuote ? "" : "(facultatif)"}
            </span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required={isQuote}
            disabled
            className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
          />
        </div>
        <div>
          <label
            htmlFor={`${formId}-subject`}
            className="mb-2 block text-sm font-semibold text-primary"
          >
            {isQuote ? "Produit ou service concerné" : "Sujet"}
            <span aria-hidden="true"> *</span>
          </label>
          <input
            id={`${formId}-subject`}
            name="subject"
            defaultValue={initialConcern}
            required
            disabled
            className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
          />
        </div>
        {isQuote ? (
          <div>
            <label
              htmlFor={`${formId}-quantity`}
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Quantité estimée{" "}
              <span className="font-normal text-text-muted">(facultatif)</span>
            </label>
            <input
              id={`${formId}-quantity`}
              name="quantity"
              type="number"
              min="1"
              disabled
              className="min-h-11 w-full rounded-control border border-primary/15 px-3 text-sm disabled:bg-bg-muted"
            />
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="mb-2 block text-sm font-semibold text-primary"
          >
            {isQuote ? "Description de votre besoin" : "Message"}
            <span aria-hidden="true"> *</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            disabled
            className="w-full resize-y rounded-control border border-primary/15 px-3 py-3 text-sm disabled:bg-bg-muted"
          />
        </div>
      </fieldset>
      <p className="mt-5 text-xs leading-5 text-text-muted">
        <span aria-hidden="true">*</span> Champ obligatoire
      </p>
      <Button type="button" disabled className="mt-5">
        {isQuote ? "Envoi de devis bientôt disponible" : "Envoi bientôt disponible"}
      </Button>
    </form>
  );
}
