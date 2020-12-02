import log4js from "log4js";

import ad from "../services/activedirectory.service";

const logger = log4js.getLogger("router");
export default async function (req, res, next) {
  logger.trace("Attempt to access admin methods");

  // If AD lookup isn't active, there's no way for us to find
  // out if access should be granted. However, webmaster has
  // specified EXPOSE_ADMIN, so we must respect it. Allow access for everyone.
  if (process.env.AD_LOOKUP_ACTIVE !== "true") {
    logger.warn(
      "AD lookup disabled! Anyone will have access to all admin-only methods! Please be aware that this scenario is insecure."
    );
    return next();
  }

  // Check if current user is member of the admins AD group
  const allowed = await ad.isUserMemberOf(
    ad.getUserFromRequestHeader(req),
    process.env.RESTRICT_ADMIN_ACCESS_TO_AD_GROUP
  );

  if (allowed) {
    logger.trace(
      "Access to admin granted. %o is member of %o.",
      ad.getUserFromRequestHeader(req),
      process.env.RESTRICT_ADMIN_ACCESS_TO_AD_GROUP
    );
    return next();
  } else {
    logger.warn(
      "Access to admin forbidden. %o is not member of %o.",
      ad.getUserFromRequestHeader(req),
      process.env.RESTRICT_ADMIN_ACCESS_TO_AD_GROUP
    );
    res.status(403).send("Forbidden");
  }
}
